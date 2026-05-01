
const swiperEquipment = new Swiper('.equipment-slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.pagination-equipment', 
    clickable: true,
  },
  breakpoints: {
    1024: {
      enabled: false,
    }
  }
});
