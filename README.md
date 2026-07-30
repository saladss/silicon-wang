# Silicon Wang website

Static site (plain HTML/CSS/JS), built for GitHub Pages with a custom domain
(`silicon.wang`, already set in `CNAME`).

## Before going live

1. **Contact form.** Sign up at [formspree.io](https://formspree.io) (free tier
   covers 50 submissions/month), create a form, and replace `YOUR_FORM_ID` in
   `index.html`'s `<form action="...">` with your real endpoint.

## Deploy to GitHub Pages

1. Create a new GitHub repo (public, unless you're on a paid plan) and push this
   folder to it:

   ```bash
   git add .
   git commit -m "Initial site"
   git remote add origin git@github.com:<you>/<repo>.git
   git push -u origin master
   ```

2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   choose "Deploy from a branch", pick `master` / `main` and `/ (root)`.

3. Still on that page, under **Custom domain**, enter `silicon.wang` and save
   (GitHub will pick up the `CNAME` file already in the repo).

4. At Gandi, point the domain's DNS at GitHub Pages:
   - `A` records for the apex (`silicon.wang`) to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<you>.github.io`

5. Back in GitHub Pages settings, once DNS propagates, tick **Enforce HTTPS**.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```
