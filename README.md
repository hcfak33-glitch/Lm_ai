# AI Photo & Video Tool (Frontend)

This is the **frontend** of the AI Photo & Video processing website.

## Features
- Upload photos from gallery
- Upload videos from gallery
- Download processed media (requires backend)

## How to Use
1. Deploy this frontend on **Vercel**.
2. Deploy the backend on **Render** (see backend repo).
3. Open `index.html` in the deployed site.
4. Select Photo or Video → Process → Download.

## Notes
- Currently, the backend URL is set in `index.html` as:  
  ```js
  const backend = "https://lm-ai-backend.onrender.com";
  ---

## 🔹 ২) Backend Repo (`lm-ai-backend`) README.md

```markdown
# AI Photo & Video Tool (Backend)

This is the **backend** for the AI Photo & Video processing website using **Flask**.

## Features
- Receive photo or video uploads
- Process media (currently placeholder processing)
- Send processed media back for download

## Setup Instructions
1. Clone this repo:
   ```bash
   git clone https://github.com/YourUsername/lm-ai-backend.git
