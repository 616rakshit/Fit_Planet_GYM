# API routes (Vercel serverless)

## `submit_enquiry`

- **Method:** POST  
- **Body:** JSON `{ name, phone, email, plan, message }`  
- **Response:** `{ success: true }` or `{ success: false, error: "..." }`

Enquiries are stored in **Vercel Blob** as a single JSON file (`enquiries.json`).

### Setup on Vercel

1. In the Vercel project: **Storage** → **Create Database** → **Blob**.
2. Create a Blob store (name e.g. `enquiries`). Vercel adds `BLOB_READ_WRITE_TOKEN` to the project.
3. Deploy. The Contact form will POST to `/api/submit_enquiry` on the same origin.

### Local development

- Run `vercel dev` in the frontend folder so `/api/submit_enquiry` is available, or
- Use a deployed preview URL; the form uses `window.location.origin` so it will target the current host.
