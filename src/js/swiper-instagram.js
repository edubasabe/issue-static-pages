document.addEventListener('DOMContentLoaded', function () {
  initSwiperInstagram();
});

function initSwiperInstagram() {
  const swiperInstagram = new Swiper ('#swiper-instagram', {
    slidesPerView: 6,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000
    },
  });

  console.log('done');
}
