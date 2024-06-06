document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Show the 'About' section by default
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        // Apply dynamic background color and shadow if not already set
        if (!activeSection.dataset.bgColor) {
            const bgColor = getRandomColor();
            activeSection.dataset.bgColor = bgColor;
            activeSection.style.backgroundColor = bgColor;
            activeSection.style.boxShadow = `0 0 20px ${bgColor}`;
        }
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
