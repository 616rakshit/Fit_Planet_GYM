# API routes (Vercel serverless)

## `submit_enquiry`

- **Method:** POST  
- **Body:** JSON `{ name, phone, email, plan, message }`  
- **Response:** `{ success: true }` or `{ success: false, error: "..." }`

Enquiries are stored in **Vercel Blob** as a single JSON file (`enquiries.json`).

### Setup on Vercel

1. **Root Directory:** If the app lives in a `frontend` folder, set **Project → Settings → General → Root Directory** to `frontend` so Vercel deploys `api/` and the function is available at `/api/submit_enquiry`.
2. **Blob store:** **Storage** → **Create Database** → **Blob** → create a store (e.g. `enquiries`). Vercel adds `BLOB_READ_WRITE_TOKEN` to the project.
3. **Redeploy** after changing Root Directory or adding the Blob store.

### Local development

- **Use Vercel CLI** so the API route is available: from the `frontend` folder run `npx vercel dev`. Then open the URL it prints and submit the form.  
- `npm start` / `yarn start` do **not** serve the `api/` folder, so the form will fail locally unless you use `vercel dev`.
