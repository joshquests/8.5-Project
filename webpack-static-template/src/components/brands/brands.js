const swiperBrands = new Swiper('.brand-slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  observer: true,
  observeParents: true,
  pagination: {
    el: '.pagination-brands',
    clickable: true,
  },
  breakpoints: {
    1024: {
      enabled: false,
    }
  }
});

const brandBtn = document.querySelector('.expand-button-brands');
const brandContainer = document.querySelector('.brand-container');

if (brandBtn && brandContainer) {
    brandBtn.addEventListener('click', () => {
        const isExpanded = brandContainer.classList.toggle('is-expanded');
        
        brandBtn.querySelector('span').textContent = isExpanded ? 'Hide' : 'Show All';
        brandBtn.querySelector('img').style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });
}