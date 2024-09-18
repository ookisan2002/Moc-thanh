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

const tabNaviContainer = document.querySelector(
  ".productDetailSection .tabNaviContainer"
);
const navList = [
  {
    value: "thanhphan",
    title: "THÀNH PHẦN",
    content: "",
  },
  {
    value: "congdung",
    title: "CÔNG DỤNG",
    content: "",
  },
  {
    value: "cachdung",
    title: "CÁCH DÙNG",
    content: "",
  },
  {
    value: "luuy",
    title: "LƯU Ý",
    content: "",
  },
];
navList.map((nav, index) => {
  tabNaviContainer.innerHTML += `
      <input
        type="radio"
        id="option${index}"
        name="detailTab"
        value="${nav.value}"
        ${index === 0 ? "checked" : ""} 
      />
      <label for="option${index}">${nav.title}</label>
    `;
});
