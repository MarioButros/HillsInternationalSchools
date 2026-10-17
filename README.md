# Egypt Hills International School website

Official Egypt Hills International School website powered by iSchoola.

**Live domain target:** https://hillsinternationalschools.com

## GitHub Pages deployment

1. Create public GitHub repository, e.g. `egypt-hills-website` under your own GitHub account.
2. Upload the **contents** of this directory, not the ZIP itself. Keep `index.html`, `styles.css`, `script.js`, `assets/` and `.nojekyll` in the repo root.
3. Under repository Settings -> Pages, choose Deploy from a branch -> `main` -> `/ (root)`, then Save.
4. Confirm the temporary `https://<username>.github.io/egypt-hills-website/` link loads correctly.
5. In Settings -> Pages, set **Custom domain** to `hillsinternationalschools.com` and Save. In GoDaddy DNS, change the website-related `A` records for `@` to these GitHub Pages addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Add or update the `www` CNAME to `mariobutros.github.io` if you want the www address. Only do this once the new GitHub Pages preview has been tested. **Do not change MX, TXT or DKIM email records.**
6. After DNS changes propagate and GitHub Pages verifies HTTPS, turn on Enforce HTTPS, and verify both www and apex routing.

## Contact form

This static form prepares an email to info@hillsinternationalschools.com using the user's mail application; it does **not** directly transmit a message from the webpage or store submitted data. To send automatically, add a backend/form provider and privacy controls.

## Change management

Do **not** push to `MarioButros/mariobutros.github.io`: it hosts the existing iSchoola site and has a CNAME for ischoola.com. Use a dedicated repository.
