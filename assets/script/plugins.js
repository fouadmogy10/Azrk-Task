const productsSwiper = new Swiper(".products-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  rtl: true,
  navigation: {
    nextEl: ".products-next",
    prevEl: ".products-prev",
  },
});

AOS.init({
  duration: 600,
  once: true,
});

var categoriesSwiper = new Swiper(".categories-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,

  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".categories-next", // نربط الزر الجديد
    prevEl: ".categories-prev",
  },
});
const swiper = new Swiper(".testimonials-swiper", {
  loop: false,
  spaceBetween: 30,
  slidesPerView: 1,
  on: {
    init: function () {
      updatePagination(this);
    },
    slideChange: function () {
      updatePagination(this);
    },
  },
});

function updatePagination(swiperInstance) {
  const totalSlides = swiperInstance.slides.length;
  const realTotal =
    totalSlides - swiperInstance.loopedSlides * 2 || totalSlides;

  // Current index (start from 1)
  const current = swiperInstance.realIndex + 1;

  // Format to always 2 digits
  document.getElementById("current-slide").textContent = current
    .toString()
    .padStart(2, "0");
  document.getElementById("total-slides").textContent = realTotal
    .toString()
    .padStart(2, "0");

  // Build pagination bars
  const container = document.getElementById("custom-pagination");
  container.innerHTML = "";

  for (let i = 1; i <= realTotal; i++) {
    const dot = document.createElement("div");
    dot.className = `h-[3px] w-6 md:w-10 rounded-full transition-all duration-300 ${
      i === current ? "bg-[#CE9461]" : "bg-gray-300"
    }`;
    container.appendChild(dot);
  }
}

const articlesSwiper = new Swiper(".articlesSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 3 },
  },
});

/* تهيئة Swiper بحركة مستمرة */
new Swiper(".brandSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 4500, // كلما قلّ الرقم زادت السرعة
  autoplay: {
    delay: 0, // يجعل الحركة متصلة بلا توقّف
    disableOnInteraction: false,
  },
  allowTouchMove: false, // لو لا تريد سحب يدوي
});
