---
description: Step-by-step guide to deploy the React Frontend to GoDaddy cPanel Hosting
---

# Deploying React Frontend to GoDaddy (cPanel)

This guide will help you deploy your Vite+React frontend application to a GoDaddy cPanel hosting environment.

## Prerequisites

- Access to GoDaddy Account
- cPanel Hosting Plan setup

## Step 1: Configure for Single Page Application (SPA)

Since this is a React app using routing (e.g., `/dashboard`, `/courses`), we need to tell the server to redirect all requests to `index.html` so React handles the routing. Otherwise, refreshing a page like `yoursite.com/dashboard` will cause a 404 error.

1. **Create a `.htaccess` file** in your `Frontend/public` folder.
    - *Note: If you don't do this, you can manually create it in GoDaddy File Manager later, but doing it here is better.*

    **File Path:** `Frontend/public/.htaccess`
    **Content:**

    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```

## Step 2: Build the Project

1. Open your terminal in VS Code.
2. Navigate to the Frontend directory:

    ```powershell
    cd Frontend
    ```

3. Run the build command:

    ```powershell
    npm run build
    ```

4. This will create a `dist` folder in your project. This folder contains your production-ready website.

## Step 3: Upload to GoDaddy

1. **Log in to GoDaddy**: Go to [godaddy.com](https://godaddy.com) and sign in.
2. **Access cPanel**:
    - Go to **My Products**.
    - Scroll to **Web Hosting** and click **Manage** next to your plan.
    - Click **cPanel Admin**.
3. **Open File Manager**:
    - In cPanel, look for the **Files** section and click **File Manager**.
4. **Navigate to Public Folder**:
    - Click on **public_html** in the left sidebar.
    - *Important:* If you already have files here (like a default page), delete them or move them to a backup folder. `public_html` should be empty or only contain files you want to keep.
5. **Upload Files**:
    - Click the **Upload** button in the top toolbar.
    - Drag and drop **ALL the contents** inside your local `Frontend/dist` folder.
        - *Note:* Do not upload the `dist` folder itself. Upload the *files inside* it (e.g., `index.html`, `assets/`, `vite.svg`, etc).
        - *Tip:* You can compress the contents of `dist` into a `zip` file locally, upload the `zip`, and then right-click > **Extract** in cPanel File Manager. This is often faster.

## Step 4: Verification

1. Visit your domain name in the browser.
2. Navigate to a sub-page (like `/login` or `/courses`) and refresh the browser. If the page loads correctly without a 404 error, your `.htaccess` is working.

## Troubleshooting

- **White Screen?** Check the Console (F12 > Console) for errors. Usually usually indicates a missing file or path issue.
- **404 on Refresh?** Verify the `.htaccess` file exists in `public_html` (it might be hidden; check "Settings" > "Show Hidden Files" in cPanel File Manager).
