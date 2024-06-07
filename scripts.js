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

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('animated'); // Reset animation
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        activeSection.classList.add('animated'); // Trigger animation
    }
}
