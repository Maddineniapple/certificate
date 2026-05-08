/**
 * This version of the script attempts to download the certificate directly.
 * Since static JS cannot "search" a folder for security reasons, we construct
 * the expected path and trigger a download attempt.
 */

function searchCertificate() {
    const searchInput = document.getElementById('cert-search');
    const resultDiv = document.getElementById('certificate-result');
    const rollNumber = searchInput.value.trim().toUpperCase();

    if (!rollNumber) {
        alert("Please enter a roll number");
        return;
    }

    // Construct the path where the certificate SHOULD be
    const fileUrl = `assets/certificates/${rollNumber}.pdf`;

    // Show a loading state
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<p>Searching for certificate ${rollNumber}...</p>`;

    /**
     * We use the 'fetch' API to check if the file exists before showing the link.
     * Note: This works best when hosted on a server (Netlify, GitHub Pages, etc.)
     */
    fetch(fileUrl, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // File exists!
                resultDiv.innerHTML = `
                    <div class="result-card">
                        <h4>Certificate Found!</h4>
                        <p>Your certificate for Roll Number <strong>${rollNumber}</strong> is ready.</p>
                        <a href="${fileUrl}" class="download-link" download="${rollNumber}.pdf">Download Certificate</a>
                    </div>
                `;
            } else {
                // File not found
                resultDiv.innerHTML = `
                    <p class="error-msg">Certificate not found for Roll Number: ${rollNumber}</p>
                    <p>Please ensure you have entered the correct roll number and that your certificate has been uploaded.</p>
                `;
            }
        })
        .catch(error => {
            // Fallback for local testing or network errors
            console.error("Error checking file:", error);
            resultDiv.innerHTML = `
                <div class="result-card">
                    <h4>Attempting Download...</h4>
                    <p>If the file exists, it will download below. If nothing happens, the roll number might be incorrect.</p>
                    <a href="${fileUrl}" class="download-link" download="${rollNumber}.pdf">Click here to try downloading</a>
                </div>
            `;
        });
}

// Allow pressing Enter to search
document.getElementById('cert-search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchCertificate();
    }
});
