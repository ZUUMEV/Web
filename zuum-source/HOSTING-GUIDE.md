# ZUUM Electric — Hosting & Deployment Guide

This is a **Next.js 16** project (App Router, TypeScript, Tailwind CSS 4, Prisma). Follow the steps below to deploy it to your own hosting and domain.

---

## 📦 What's Inside the Zip

```
zuum-source/
├── src/                    # All source code
│   ├── app/                # Next.js app router (pages, API routes, layout)
│   │   ├── api/register/   # Form submission endpoint
│   │   ├── globals.css     # Global styles + theme colors
│   │   ├── layout.tsx      # Root layout (fonts, metadata, theme)
│   │   └── page.tsx        # Main landing page
│   ├── components/         # UI components
│   │   ├── sections/       # Page sections (hero, plans, faq, etc.)
│   │   ├── ui/             # shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── hooks/              # React hooks
│   └── lib/                # Utilities (site config, db, utils)
├── public/                 # Static assets (logos, favicon)
├── prisma/                 # Database schema
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example            # Copy to .env and fill in
└── HOSTING-GUIDE.md        # This file
```

---

## 🚀 Option 1: Vercel (RECOMMENDED — Easiest)

Vercel is the company behind Next.js, so deployment is seamless.

### Steps:
1. **Create a Vercel account** at [vercel.com](https://vercel.com) (free tier is enough)
2. **Upload the zip to GitHub:**
   - Create a new repository on [GitHub](https://github.com/new)
   - Extract the zip on your computer
   - Run these commands in the extracted folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit — ZUUM landing page"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/zuum-website.git
     git push -u origin main
     ```
   - (Or use GitHub Desktop if you prefer a GUI)
3. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `zuum-website` repo
   - Vercel auto-detects Next.js — **no config needed**
   - Click "Deploy"
4. **Add your domain:**
   - In Vercel dashboard → your project → Settings → Domains
   - Enter `zuum.co.in` (or your domain)
   - Vercel gives you DNS records to add at your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the `A` record or `CNAME` as shown
   - SSL is automatic (free Let's Encrypt cert)
5. **Done!** Your site is live at `https://zuum.co.in`

### Why Vercel is best for Next.js:
- Zero config — detects Next.js automatically
- Free SSL certificate
- Global CDN (fast worldwide)
- Automatic deployments on every git push
- Free tier covers this landing page easily

---

## 🌐 Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Upload the zip to GitHub (same as Vercel step 2)
3. In Netlify: "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy"
7. Add custom domain in Site settings → Domain management

---

## 🖥️ Option 3: Traditional cPanel Hosting (Hostinger, Bluehost, etc.)

> ⚠️ Most shared cPanel hosting does **NOT** support Next.js (Node.js apps).
> You need a hosting that supports **Node.js** — look for "Node.js hosting" or use a VPS.

### If your cPanel supports Node.js (Hostinger VPS, A2 Hosting, etc.):

1. **Build the project locally:**
   ```bash
   # On your computer, in the extracted folder:
   npm install
   npm run build
   ```
   This creates a `.next` folder with the production build.

2. **Upload files to hosting:**
   - Use cPanel File Manager or FTP (FileZilla)
   - Upload ALL files including `node_modules` and `.next` folder
   - Place in `public_html` or a subfolder

3. **Set up Node.js app in cPanel:**
   - cPanel → "Setup Node.js App"
   - Node.js version: 18 or 20
   - App root: `public_html` (or your folder)
   - Startup file: `server.js` (you'll need to create this — see below)
   - Run `npm install` via SSH or cPanel terminal

4. **Create a `server.js` for production:**
   ```javascript
   const { createServer } = require('http');
   const { parse } = require('url');
   const next = require('next');
   
   const app = next({ dev: false });
   const handle = app.getRequestHandler();
   
   app.prepare().then(() => {
     createServer((req, res) => {
       const parsedUrl = parse(req.url, true);
       handle(req, res, parsedUrl);
     }).listen(3000, (err) => {
       if (err) throw err;
       console.log('> Ready on http://localhost:3000');
     });
   });
   ```

5. **Point your domain** to the app via cPanel → Domains

---

## 🐧 Option 4: VPS (DigitalOcean, Linode, AWS EC2, Hetzner)

Best for full control. Assumes basic Linux/SSH knowledge.

### Steps:
1. **Spin up a VPS** (Ubuntu 22.04+, minimum 1GB RAM)

2. **SSH into the server:**
   ```bash
   ssh root@YOUR_SERVER_IP
   ```

3. **Install Node.js 20:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
   apt-get install -y nodejs
   node -v  # should show v20.x
   ```

4. **Install PM2** (process manager to keep app running):
   ```bash
   npm install -g pm2
   ```

5. **Upload your code:**
   ```bash
   # On your local machine:
   scp -r zuum-source/ root@YOUR_SERVER_IP:/var/www/zuum
   
   # Or clone from GitHub:
   git clone https://github.com/YOUR_USERNAME/zuum-website.git /var/www/zuum
   ```

6. **Install & build on server:**
   ```bash
   cd /var/www/zuum
   npm install
   npm run build
   cp .env.example .env  # then edit .env if needed
   ```

7. **Start with PM2:**
   ```bash
   pm2 start npm --name "zuum" -- start
   pm2 startup
   pm2 save
   ```

8. **Install Nginx (reverse proxy):**
   ```bash
   apt install nginx
   ```

9. **Configure Nginx:**
   ```bash
   nano /etc/nginx/sites-available/zuum
   ```
   Paste:
   ```nginx
   server {
       listen 80;
       server_name zuum.co.in www.zuum.co.in;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Then:
   ```bash
   ln -s /etc/nginx/sites-available/zuum /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

10. **Install SSL (free Let's Encrypt):**
    ```bash
    apt install certbot python3-certbot-nginx
    certbot --nginx -d zuum.co.in -d www.zuum.co.in
    ```

11. **Point your domain:**
    - At your domain registrar, add an **A record**:
      - Name: `@` (or `zuum.co.in`)
      - Value: `YOUR_SERVER_IP`
      - TTL: 3600
    - Add another for `www`:
      - Name: `www`
      - Value: `YOUR_SERVER_IP`

12. **Done!** Visit `https://zuum.co.in`

---

## 📧 Form Submissions — How They Work

The registration form on the homepage sends data to `/api/register`. Currently it:
1. Logs the submission on the server
2. Returns a `mailto:` link that opens the user's email client to send to `zuumelectric@gmail.com`

### To receive form data directly without mailto:
- **Vercel/Netlify:** Use a service like [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or [EmailJS](https://emailjs.com)
- Add an API key to `.env`:
  ```
  RESEND_API_KEY="your-key"
  ```
- Update `src/app/api/register/route.ts` to send email via the service

### Current email/phone settings (in `src/lib/site.ts`):
```typescript
export const SITE = {
  phone: "7900333002",
  whatsapp: "917900333002",
  email: "zuumelectric@gmail.com",
  locations: ["Haldwani", "Rudrapur"],
}
```
Edit this file to change contact details.

---

## 🔧 Local Development (to test before deploying)

```bash
# 1. Install Node.js 20+ from nodejs.org
# 2. Extract the zip
# 3. Install dependencies:
npm install

# 4. Copy env file:
cp .env.example .env

# 5. Run dev server:
npm run dev

# 6. Open http://localhost:3000
```

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Ensure Node.js 20+ : `node -v` |
| Missing modules | Run `npm install` again |
| Database error | Delete `prisma/dev.db`, run `npx prisma db push` |
| Form not submitting | Check browser console for errors |
| Logos not loading | Google favicon service needs internet — normal on local offline |
| CSS not loading | Run `npm run build` then `npm start` to test production |

---

## ✅ Quick Checklist Before Going Live

- [ ] Update `src/lib/site.ts` with correct phone/email/locations
- [ ] Test form submission locally
- [ ] Replace logos in `public/` if needed (`zuum-light-theme-logo.png`, `zuum-dark-theme-logo.png`, `favicon.png`)
- [ ] Update metadata in `src/app/layout.tsx` (title, description, domain URL)
- [ ] Test on mobile + desktop
- [ ] Deploy to hosting
- [ ] Point domain DNS
- [ ] Verify SSL (https:// works)
- [ ] Submit a test form to confirm email delivery

---

## 📞 Need Help?

If you get stuck, the most common and easiest path is:
1. Push code to GitHub
2. Import to Vercel (free)
3. Add your domain in Vercel dashboard
4. Update DNS at your domain registrar

This takes ~15 minutes and costs nothing.
