window.addEventListener("DOMContentLoaded", () => {
  const banner_home = document.querySelector("#banner_home");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const childElements = banner_home.querySelectorAll(":scope > *");
          childElements.forEach((element) => {
            element.classList.add("active");
          });
          /* ==============================Cần bak lại thì else============================== */
          /* ==============================Cần bak lại thì else============================== */
          /* ==============================Cần bak lại thì else============================== */
          // } else {
          //   const childElements = banner_home.querySelectorAll(":scope > *");
          //   childElements.forEach((child) => {
          //     child.classList.remove("active");
          //   });
        }
      });
    },
    {
      root: null, // Theo dõi viewport của trình duyệt
      rootMargin: "-10% 0px 0px 0px", // Kích hoạt khi phần tử cách viewport 10% chiều cao
      threshold: 0, // Kích hoạt ngay khi mép trên phần tử vượt quá điểm -10%
    }
  );
  observer.observe(banner_home);
});
