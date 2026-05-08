# E-Certificate Portal

This is a static website for downloading e-certificates, designed to match the Guru's Athenaeum website.

## How to add certificates

1.  **Prepare the PDF files**:
    *   Name each certificate file with the user's roll number (e.g., `21X01A0501.pdf`).
    *   Place these files in the `assets/certificates/` folder.

2.  **Update the Database**:
    *   Open `script.js`.
    *   Find the `certificateDB` array.
    *   Add a new entry for each certificate using this format:
    ```javascript
    {
        rollNumber: "ROLL_NUMBER",
        name: "STUDENT_NAME",
        event: "EVENT_NAME",
        date: "EVENT_DATE",
        fileUrl: "assets/certificates/ROLL_NUMBER.pdf"
    }
    ```

## Files Structure
- `index.html`: The main page structure.
- `style.css`: The styling (matches gurusathenaeum.netlify.app).
- `script.js`: The logic for searching and downloading.
- `assets/`: Folder for images and certificates.
