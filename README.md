## Security / Analytics configuration

Analytics loading is gated by the `PUBLIC_ENABLE_ANALYTICS` environment variable used by `src/components/Analytics.astro`.

- `PUBLIC_ENABLE_ANALYTICS=true`: Enables Umami script injection (recommended for production).
- `PUBLIC_ENABLE_ANALYTICS=false`: Disables Umami script injection (recommended for local development or hardened deployments).

Example:

```bash
PUBLIC_ENABLE_ANALYTICS=false npm run dev
```
