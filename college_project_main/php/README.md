# Enquiry form (HTML + PHP)

When a user submits an enquiry, it is saved to:

- **enquiries.txt** – plain text, one line per enquiry (open in Notepad)
- **enquiries.csv** – CSV with headers (open in Excel)

## How to run

1. **Standalone (HTML form only)**  
   From the project root or from this folder:
   ```bash
   cd php
   php -S localhost:8888
   ```
   Then open: http://localhost:8888/contact.html  
   Submit the form; data is written to `enquiries.txt` and `enquiries.csv` in this folder.

2. **With the React app**  
   - Start the PHP server as above (port 8888).  
   - In the frontend folder, create `.env` with:
     ```
     REACT_APP_API_BASE_URL=http://localhost:8888
     ```
   - Start React: `npm start`.  
   The Contact page will POST to `http://localhost:8888/submit_enquiry.php` and enquiries will be saved here.

## Files

- **submit_enquiry.php** – Handles POST (form or JSON). Writes to `enquiries.txt` and `enquiries.csv`.
- **contact.html** – Standalone contact form; posts to `submit_enquiry.php`.
- **enquiries.txt** / **enquiries.csv** – Created on first submission (ensure the `php` folder is writable).
