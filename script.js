// Sample database of certificates
// In a real scenario, this would be an API call or a larger JSON file
const certificateDB = [
    {
        rollNumber: "21X01A0501",
        name: "John Doe",
        event: "The Ultimate Literary Challenge",
        date: "May 07, 2026",
        fileUrl: "assets/certificates/21X01A0501.pdf"
    },
    {
        rollNumber: "21X01A0502",
        name: "Jane Smith",
        event: "The Ultimate Literary Challenge",
        date: "May 07, 2026",
        fileUrl: "assets/certificates/21X01A0502.pdf"
    }
];

function searchCertificate() {
    const searchInput = document.getElementById('cert-search');
    const resultDiv = document.getElementById('certificate-result');
    const rollNumber = searchInput.value.trim().toUpperCase();

    if (!rollNumber) {
        alert("Please enter a roll number");
        return;
    }

    // Find certificate in the database
    const certificate = certificateDB.find(c => c.rollNumber === rollNumber);

    resultDiv.style.display = 'block';
    
    if (certificate) {
        resultDiv.innerHTML = `
            <div class="result-card">
                <h4>Certificate Found!</h4>
                <p><strong>Name:</strong> ${certificate.name}</p>
                <p><strong>Event:</strong> ${certificate.event}</p>
                <p><strong>Date:</strong> ${certificate.date}</p>
                <a href="${certificate.fileUrl}" class="download-link" download>Download Certificate</a>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <p class="error-msg">No certificate found for Roll Number: ${rollNumber}</p>
            <p>Please check the roll number and try again.</p>
        `;
    }
}

// Allow pressing Enter to search
document.getElementById('cert-search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchCertificate();
    }
});
