document.addEventListener('DOMContentLoaded', function () {
  initSwiperInstagram();
  getInstagramFeed('issuenumberone');
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

function getInstagramFeed(username) {
  fetch(`https://www.instagram.com/${username}/?__a=1`)
    .then(response => {
      console.log(response);
      // console.log(response.graphql.user.edge_owner_to_timeline_media.edges);
    })
    .catch(error => {
      console.error(error);
    })
}
