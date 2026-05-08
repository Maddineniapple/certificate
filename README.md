# E-Certificate Portal

This is a static website for downloading e-certificates, designed to match the Guru's Athenaeum website.

## How to add certificates

This website is now automated! You no longer need to edit any code.

1.  **Prepare the PDF file**:
    *   Save your certificate as a PDF.
    *   **Rename the file** to exactly match the student's Roll Number (e.g., `25WJ1A05F9.pdf`).

2.  **Upload**:
    *   Place the PDF file inside the `assets/certificates/` folder.
    *   Upload/Deploy your website.

The website will automatically find the file when the student enters their roll number.

## Files Structure
- `index.html`: The main page structure.
- `style.css`: The styling (matches gurusathenaeum.netlify.app).
- `script.js`: The logic for searching and downloading.
- `assets/`: Folder for images and certificates.
