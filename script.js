// Theme switcher functionality
function toggleTheme() {
    const body = document.body;
    const themeSwitch = document.querySelector('.theme-switch');
    const sunIcon = themeSwitch.querySelector('.bx-sun');
    const moonIcon = themeSwitch.querySelector('.bx-moon');
    
    body.classList.toggle('dark-mode');
    
    // Toggle icons
    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        // Save preference
        localStorage.setItem('theme', 'dark');
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        // Save preference
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeSwitch = document.querySelector('.theme-switch');
        const sunIcon = themeSwitch.querySelector('.bx-sun');
        const moonIcon = themeSwitch.querySelector('.bx-moon');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
});
