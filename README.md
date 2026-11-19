# silicon.wang

This repo only redirects `silicon.wang` (and any path on it) to
<https://www.outerfab.com/>. It's served by GitHub Pages with the custom domain set in `CNAME`.

- `index.html` redirects the root.
- `404.html` redirects every other path (GitHub Pages serves it for unknown URLs).

GitHub Pages can't send a true HTTP 301, so the redirect is a meta refresh plus a JS fallback.

The previous multi-page site (services, customers, contact form, photo galleries) is in git
history, last present at commit `4779728`.
