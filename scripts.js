document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Show the 'About' section by default

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);

            // Smooth scroll
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});


function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Replace with the correct path to your PDF file
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Thanks for downloading my resume!');
}
