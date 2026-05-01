
document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.querySelector('header .menu-btn'); 
    const sidebar = document.querySelector('.left-sidebar');
    const closeMenuBtn = document.querySelector('.left-sidebar .menu-btn');

    if (openMenuBtn && sidebar) {
        openMenuBtn.addEventListener('click', () => {
            sidebar.classList.add('is-open');
        });
    }

    if (closeMenuBtn && sidebar) {
        closeMenuBtn.addEventListener('click', () => {
            sidebar.classList.remove('is-open');
        });
    }
});