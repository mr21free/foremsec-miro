# Security Remediation Action Plan (Implementation-Ready)

This plan translates the previous audit into **exact, file-level changes**. It is intentionally staged so you can approve each phase before code edits.

## Phase 1 — Baseline security headers (highest priority)

### 1.1 Add static host header rules
**Create file:** `public/_headers`

**Why here:** Many static hosts (Netlify/Cloudflare Pages compatible flows) consume this file automatically and apply headers without app runtime changes.

**Content to add:**

```txt
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
  Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self' https://cloud.umami.is; connect-src 'self' https://cloud.umami.is; form-action 'self'; upgrade-insecure-requests
```

**Notes:**
- `style-src 'unsafe-inline'` is a compatibility baseline for Astro/Tailwind output. Tighten later if feasible.
- HSTS should only be enabled once HTTPS is fully enforced for all subdomains.

### 1.2 Add explicit robots hardening metadata (defense-in-depth)
**Edit file:** `src/components/BaseHead.astro`

**Where:** Inside `extend.meta` array.

**Add:**
```ts
{ name: 'referrer', content: 'strict-origin-when-cross-origin' },
```

**Reason:** Header is preferred, but this provides fallback policy signaling on pages.

---

## Phase 2 — Third-party analytics risk reduction

### 2.1 Restrict analytics execution with CSP allowlist
**Edit file:** `public/_headers` (same file as above)

**Where:** `Content-Security-Policy` line.

**Ensure it includes:**
- `script-src 'self' https://cloud.umami.is`
- `connect-src 'self' https://cloud.umami.is`

### 2.2 Move analytics script loading to a dedicated component
**Create file:** `src/components/Analytics.astro`

**Content:**
```astro
---
const enabled = import.meta.env.PUBLIC_ENABLE_ANALYTICS === 'true';
---

{enabled && (
  <script
    defer
    src="https://cloud.umami.is/script.js"
    data-website-id="22b56afa-d51b-40d1-8e4f-438be635c005"
    data-domains="miro.foremsec.com"
  ></script>
)}
```

**Edit file:** `src/layouts/BaseLayout.astro`

**Change:**
- Add `import Analytics from '../components/Analytics.astro';`
- Replace inline `<script ...umami...>` block with `<Analytics />`

**Reason:** Centralized control + environment gate for production only.

### 2.3 Add environment toggle documentation
**Edit file:** `README.md`

**Add section:** “Security / Analytics configuration” with:
- `PUBLIC_ENABLE_ANALYTICS=true` for production
- `PUBLIC_ENABLE_ANALYTICS=false` for local/dev or hardened deployments

---

## Phase 3 — Clickjacking and framing

### 3.1 Enforce anti-framing policy
**Edit file:** `public/_headers`

**Ensure both are present:**
- `X-Frame-Options: DENY`
- `Content-Security-Policy: ... frame-ancestors 'none' ...`

**Reason:** CSP `frame-ancestors` is modern control; XFO is backward compatibility.

---

## Phase 4 — Dependency and security scanning in CI

### 4.1 Add CI workflow for automated security checks
**Create file:** `.github/workflows/security.yml`

**Workflow should run on:**
- `push`
- `pull_request`
- optional weekly schedule

**Jobs:**
1. `npm ci`
2. `npm audit --omit=dev` (non-blocking warning mode initially)
3. `npx osv-scanner --lockfile=package-lock.json` (or SBOM-based scan)
4. `npm outdated` (report only)

### 4.2 Add Dependabot updates
**Create file:** `.github/dependabot.yml`

**Config:**
- ecosystem: `npm`
- directory: `/`
- schedule: weekly
- grouped updates for minor/patch

---

## Phase 5 — Validation checklist after implementation

## 5.1 Header verification (live)
Run:
```bash
curl -I https://miro.foremsec.com/
```
Confirm presence of:
- `strict-transport-security`
- `content-security-policy`
- `x-content-type-options`
- `x-frame-options`
- `referrer-policy`
- `permissions-policy`

### 5.2 CSP behavior smoke test
- Open site in browser devtools.
- Confirm no CSP violations for first-party assets and Umami.
- Confirm inline/script eval is blocked.

### 5.3 Analytics gate test
- With `PUBLIC_ENABLE_ANALYTICS=false`, verify no request to `cloud.umami.is`.
- With `PUBLIC_ENABLE_ANALYTICS=true`, verify normal analytics load.

### 5.4 CI security checks
- Confirm workflow runs on PR.
- Confirm dependency findings are visible in CI logs.

---

## Suggested order of actual code changes (once approved)
1. `public/_headers`
2. `src/components/Analytics.astro`
3. `src/layouts/BaseLayout.astro`
4. `src/components/BaseHead.astro`
5. `README.md`
6. `.github/workflows/security.yml`
7. `.github/dependabot.yml`

This order minimizes breakage risk and makes deployment verification straightforward.
