---
description: Guide for deploying Backend to Render and Frontend to Vercel with Environment Variables.
---

# Deployment Guide: Render (Backend) + Vercel (Frontend)

This guide helps you deploy your stack where the **React Frontend** lives on Vercel (connected to your `aotms.in` domain) and the **Node.js Backend** lives on Render.

## Part 1: Render (Backend) Deployment

1. **Create Service**:
    * Go to [Render Dashboard](https://dashboard.render.com/).
    * Click **New +** -> **Web Service**.
    * Connect your GitHub repository: `jayaveerR/Aotms_2026`.

2. **Configure Settings**:
    * **Root Directory**: `Backend` (Important! Your backend code is in this subfolder).
    * **Runtime**: `Node`
    * **Build Command**: `npm install`
    * **Start Command**: `node server.js`

3. **Environment Variables**:
    * Scroll down to the **Environment Variables** section.
    * Add the following keys and values:

| Key | Value |
| :--- | :--- |
| `MONGO_URL` | `mongodb+srv://Aotms:Aotms@aotms.pskqemf.mongodb.net/Aotms` |
| `JWT_SECRET` | `8eca43d7d50144e373b0704ccf32707daac84347e491b817c31b50492e8cc2228` |
| `CLIENT_URL` | `https://aotms.in`  *(This allows your Vercel frontend to connect)* |
| `RECAPTCHA_SECRET_KEY` | `6Lf-9lEsAAAAALvm8NMYl5IMj696RYnR8r9qiIm1` |
| `OPEN_ROUTER_API_KEY` | `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` |

1. **Deploy**: Click **Create Web Service**. Your backend URL will look like `https://aotms-2026.onrender.com`.

---

## Part 2: Vercel (Frontend) Deployment

1. **Import Project**:
    * Go to [Vercel Dashboard](https://vercel.com/dashboard).
    * Click **Add New...** -> **Project**.
    * Import the same repository `jayaveerR/Aotms_2026`.

2. **Configure Settings**:
    * **Framework Preset**: Vite
    * **Root Directory**: Click "Edit" and select `Frontend`.

3. **Environment Variables**:
    * Expand the **Environment Variables** section.
    * Add the following:

| Key | Value |
| :--- | :--- |
| `VITE_API_URL` | `https://aotms-2026.onrender.com` *(Links frontend to your Render backend)* |
| `VITE_RECAPTCHA_SITE_KEY` | `6Ld3FU8sAAAAAIyxE8aaxD_QozjWK7Dd_uIsio9d` |

1. **Deploy**: Click **Deploy**.

## Part 3: Domain Setup (GoDaddy + Vercel)

1. **In Vercel**:
    * Go to your Project **Settings** -> **Domains**.
    * Add `aotms.in`.
    * Vercel will give you DNS records (A record or CNAME).

2. **In GoDaddy**:
    * Go to **DNS Management** for `aotms.in`.
    * Add the records provided by Vercel.
    * *Note:* Remove any old "Forwarding" or conflicting A records if prompted.

3. **Verification**:
    * Wait for DNS propogation (usually minutes, sometimes up to 24h).
    * Visit `https://aotms.in`. It should load your frontend and successfully fetch data from the backend.
