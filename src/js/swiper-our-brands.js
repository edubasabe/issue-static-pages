document.addEventListener('DOMContentLoaded', function () {
  initSwiper();
});

function initSwiper() {
  const swiper = new Swiper ('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  });
  console.log('done');
}
