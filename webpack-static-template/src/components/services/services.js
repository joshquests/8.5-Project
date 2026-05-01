const swiperNav = new Swiper('.navigation-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    grabCursor: true,

    breakpoints: {
        1024: {
            enabled: false,
        }
    }
});


document.querySelectorAll('.expand-button, .read-more-btn').forEach(button => {
    button.addEventListener('click', () => {

        if (window.innerWidth >= 1024 && button.classList.contains('read-more-btn')) {
            return;
        }

        const targetId = button.getAttribute('data-target');
        const targetContainer = targetId 
            ? document.getElementById(targetId) 
            : button.parentElement.querySelector('.continued-article');
        
        const textSpan = button.querySelector('.show-text, .read-more');
        const iconImg = button.querySelector('img');

        if (!targetContainer) return;

        const isExpanded = targetContainer.classList.toggle('is-expanded');

        if (isExpanded) {
            textSpan.textContent = button.classList.contains('read-more-btn') ? 'Close' : 'Hide';
            if (iconImg) iconImg.style.transform = 'rotate(180deg)';
        } else {
            textSpan.textContent = button.classList.contains('read-more-btn') ? 'Read More' : 'Show All';
            if (iconImg) iconImg.style.transform = 'rotate(0deg)';
        }
    });
});