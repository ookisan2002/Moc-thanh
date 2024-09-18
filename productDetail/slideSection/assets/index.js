var swiper = new Swiper(".mySwiperRelatedProduct", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".relatedProduct .swiper-button-next",
    prevEl: ".relatedProduct .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  thumbs: {
    swiper: swiper,
  },
});

AOS.init();
