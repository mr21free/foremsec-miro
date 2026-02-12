# Security Audit — miro.foremsec.com

Date: 2026-02-12  
Auditor: Codex (automated + manual review)

## Scope
- **Runtime target:** `https://miro.foremsec.com/`
- **Codebase:** Astro static website in this repository

## Methodology
1. Manual source review for common web risks (XSS, injection, insecure defaults, secret exposure, clickjacking, third-party script trust).
2. Lightweight runtime probing (`curl`) for response behavior and headers.
3. Dependency vulnerability check attempt (`npm audit`).

## Runtime checks and evidence
### Command outputs
- `curl -s -D - -o /tmp/miro_home.html https://miro.foremsec.com/`
  - Result: `HTTP/1.1 403 Forbidden`, body `Forbidden`.
- `curl -s -D - -o /tmp/miro_home_http.html http://miro.foremsec.com/`
  - Result: `HTTP/1.1 403 Forbidden`.
- `npm audit --omit=dev --json`
  - Failed with `403 Forbidden` on npm advisories endpoint in this environment.

Because the target responded with 403 to all probes from this environment, dynamic security-header validation could not be completed against the live site.

## Findings

### 1) Missing explicit browser security headers in app layer
- **Severity:** **Medium**
- **Type:** Security hardening / browser policy
- **Evidence:** No CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, or X-Content-Type-Options are configured in Astro app config/layouts. (`astro.config.mjs` only defines site/integrations/fonts; `BaseHead.astro` only sets SEO/viewport metadata).
- **Risk:** If edge/proxy does not enforce these headers, the site is more exposed to XSS impact amplification, clickjacking, MIME confusion, and data leakage via referrers.
- **Recommendation:** Set headers at CDN/proxy level (preferred) or through middleware/adapter where applicable.

### 2) Third-party analytics script loaded with full DOM privileges and no integrity pinning
- **Severity:** **Medium**
- **Type:** Supply chain / client-side script trust
- **Evidence:** `BaseLayout.astro` loads `https://cloud.umami.is/script.js` directly, with no SRI hash and no nonce-based CSP strategy.
- **Risk:** If analytics vendor infrastructure or DNS/path is compromised, malicious JavaScript executes in visitor browsers.
- **Recommendation:**
  - Enforce strict CSP (`script-src 'self' https://cloud.umami.is` + nonces/hashes where possible).
  - Consider self-hosting analytics script or version pinning strategy.
  - Monitor third-party script changes.

### 3) Clickjacking protection not visible in codebase
- **Severity:** **Low** (or **Medium** if sensitive authenticated actions are added later)
- **Type:** UI redress / framing
- **Evidence:** No app-layer `X-Frame-Options` or CSP `frame-ancestors` policy is present.
- **Risk:** Site pages could be framed by malicious origins if proxy/CDN does not block framing.
- **Recommendation:** Add `Content-Security-Policy: frame-ancestors 'none';` (or explicit allowlist) and/or `X-Frame-Options: DENY`.

### 4) Dependency-vulnerability visibility gap in CI/process
- **Severity:** **Low**
- **Type:** SDLC / monitoring gap
- **Evidence:** `npm audit` could not be executed successfully in this environment due 403 to npm advisories API; repository currently has no visible security-audit automation config in reviewed files.
- **Risk:** Known vulnerable packages may go undetected between updates.
- **Recommendation:** Add CI checks (e.g., `npm audit` fallback mirror, OSV-Scanner, Dependabot/Renovate).

## Positive observations
- External links opened in new tabs are generally protected with `rel="noopener noreferrer"` in reviewed components.
- No obvious hardcoded credentials or API keys found in tracked source files reviewed.
- No obvious dangerous sinks (`eval`, `innerHTML`, `set:html`) in application components reviewed.

## Severity summary
- **Critical:** 0
- **High:** 0
- **Medium:** 2
- **Low:** 2

## Priority remediation plan
1. Define and deploy baseline security headers at edge (CSP, HSTS, frame-ancestors, nosniff, referrer-policy, permissions-policy).
2. Reduce third-party JS trust risk (CSP + monitoring or self-hosting strategy for analytics script).
3. Add dependency vulnerability scanning in CI with reliable advisory access.
4. Re-run external dynamic scan from an allowed IP/network and verify final header posture.
