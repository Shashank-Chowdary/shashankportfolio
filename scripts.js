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
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Pentala Shashank Resume.pdf'; // Replace with the correct path to your PDF file
    link.download = 'Pentala Shashank Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Thanks for downloading my resume!');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Shashank Pentala CV.pdf'; // Replace with the correct path to your PDF file
    link.download = 'Shashank Pentala CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Thanks for downloading my CV!');
}
function restartVideo() {
    const video = document.getElementById('bg-video');
    video.currentTime = 0;
    video.play();
}
