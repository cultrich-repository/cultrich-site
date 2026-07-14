# Cultrich — deploy

Launch-ready static site for GitHub Pages.

1. Push the contents of this folder to your repo (branch `main`, root — or a `gh-pages` branch).
2. In repo Settings → Pages, set the source to that branch/root.
3. Point `cultrich.com` DNS at GitHub Pages (A records 185.199.108-111.153 + CNAME `www` → `<user>.github.io`). The `CNAME` file is already included.

URLs: `/` `/about/` `/services/` `/contact/` `/demo/` — matching sitemap.xml and each page’s canonical.
