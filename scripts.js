document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Show the 'About' section by default
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        setTimeout(() => {
            activeSection.style.opacity = 1;
            activeSection.style.transform = 'translateY(0)';
        }, 50);
    }
}
