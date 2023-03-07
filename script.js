const wrapper = document.querySelector('#wrapper');
const nav = document.querySelector('#nav');
const hamburger = document.querySelector('#hamburger');

// Toggle show/hide sidebar
hamburger.addEventListener('click', () => {
    wrapper.classList.toggle('sidebar-toggle');
    nav.classList.toggle('sidebar-toggle');
});

// Hide sidebar on less than 1024px after click
document.addEventListener('click', (e) => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    if (mediaQuery.matches && !hamburger.contains(e.target)) {
        wrapper.classList.remove('sidebar-toggle');
        nav.classList.remove('sidebar-toggle');
    }
});

// Hide sidebar on less than 1024px after resize
window.addEventListener('resize', () => {
    wrapper.classList.remove('sidebar-toggle');
    nav.classList.remove('sidebar-toggle');
});

// Show sidebar on 1024px and higher, also after resize
function showSidebar() {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (mediaQuery.matches) {
        wrapper.classList.add('sidebar-toggle');
        nav.classList.add('sidebar-toggle');
    }
}
window.addEventListener('resize', () => {
    showSidebar();
});

showSidebar();
