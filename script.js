/* eslint-disable indent */

const wrapper = document.querySelector('#wrapper');
const nav = document.querySelector('#nav');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    wrapper.classList.toggle('sidebar-toggle');
    nav.classList.toggle('sidebar-toggle');
});

document.addEventListener('click', (e) => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    if (mediaQuery.matches && !hamburger.contains(e.target)) {
        wrapper.classList.remove('sidebar-toggle');
        nav.classList.remove('sidebar-toggle');
    }
});
