
const swiperPrices = new Swiper('.prices-slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.pagination-prices',
    clickable: true,
  },
  breakpoints: {
    1024: {
      enabled: false,
    }
  }
});
