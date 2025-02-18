function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleButton = document.querySelector('.toggle-button i');
    toggleButton.classList.toggle('fa-moon');
    toggleButton.classList.toggle('fa-sun');
}

function scrollToSection(section) {
    const rect = section.getBoundingClientRect();
    const scrollMargin = 70; // 20px margin at the top
    const targetY = rect.top - scrollMargin;
  
    window.scrollTo({
      top: window.pageYOffset + targetY,
      behavior: 'smooth',
    });
}

const aboutBtn = document.getElementById('about-btn');
const educationBtn = document.getElementById('education-btn');
const courseworkBtn = document.getElementById('coursework-btn');
const experienceBtn = document.getElementById('experience-btn');
const projectsBtn = document.getElementById('projects-btn');
const skillsBtn = document.getElementById('skills-btn');
const awardBtn = document.getElementById('award-btn');
const contactBtn = document.getElementById('contact-btn');

const aboutSection = document.getElementById('about-section');
const educationSection = document.getElementById('education-section');
const courseworkSection = document.getElementById('coursework-section');
const experienceSection = document.getElementById('experience-section');
const projectsSection = document.getElementById('projects-section');
const skillsSection = document.getElementById('skills-section');
const awardSection = document.getElementById('award-section');
const contactSection = document.getElementById('contact-section');

aboutBtn.addEventListener('click', () => {
    scrollToSection(aboutSection);
});

educationBtn.addEventListener('click', () => {
    scrollToSection(educationSection);
});

courseworkBtn.addEventListener('click', () => {
    scrollToSection(courseworkSection);
});

experienceBtn.addEventListener('click', () => {
    scrollToSection(experienceSection);
});

projectsBtn.addEventListener('click', () => {
    scrollToSection(projectsSection);
});

skillsBtn.addEventListener('click', () => {
    scrollToSection(skillsSection);
});

awardBtn.addEventListener('click', () => {
    scrollToSection(awardSection);
});

contactBtn.addEventListener('click', () => {
    scrollToSection(contactSection);
});

// Get the header element
const header = document.querySelector('header');

// Get the body element to check the theme
const body = document.body;

function updateHeaderGradient(x, y) {
    if (body.classList.contains('dark-mode')) {
        header.style.background = `linear-gradient(to right, rgb(${50 + 1.8 * x}, ${20 + 0.8 * y}, ${200}), rgb(${150 - 1.8 * x}, ${20 - 0.8 * y}, ${50}))`;
    } else {
        header.style.background = `linear-gradient(to right, rgb(${100 + 1.8 * x}, ${60 + 0.8 * y}, ${250}), rgb(${200 - 1.8 * x}, ${60 - 0.8 * y}, ${100}))`;
    }
}

// Add event listener for mouse movement
document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth * 100;
    const y = event.clientY / window.innerHeight * 100;
    updateHeaderGradient(x, y);
});

// Add event listener for theme change
body.addEventListener('themeChange', () => {
    updateHeaderGradient(
        event.clientX / window.innerWidth * 100,
        event.clientY / window.innerHeight * 100
    );
});



