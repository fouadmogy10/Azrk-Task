/* عناصر DOM الأساسيّة */
const menuBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("side-menu");
const closeBtn = document.getElementById("menu-close");
const overlay = document.getElementById("menu-overlay");

const subMenu = document.getElementById("sub-menu");
const subTitle = document.getElementById("sub-title");
const subList = document.getElementById("sub-list");

const backMain = document.getElementById("back-main");
const closeAll = document.getElementById("close-all");

const menuList = document.getElementById("dynamic-menu");

/* بيانات القائمة */
const menuData = [
  { title: "الرئيسية", children: [] },
  { title: "المدونة", children: [] },
  { title: "الخواتم", children: ["خواتم ذهب", "خواتم فضة", "خواتم ماس"] },
  { title: "العقود", children: ["عقود قصيرة", "عقود ذهب", "عقود أنيقة"] },
  { title: "الساعات", children: ["ساعات رجالي", "ساعات نسائي"] },
];
const categoriesData = [
  {
    title: "الساعات",
    count: 33,
    image:
      "assets/img/CatSlider-ec/8065d83b935b20576cf696d618179f7e5a5bc333.jpg",
  },
  {
    title: "الأساور",
    count: 33,
    image:
      "assets/img/CatSlider-ec/b82430b26ad11c68949a7153735bf9e0e84d316e.jpg",
  },
  {
    title: "الحلقان",
    count: 33,
    image: "assets/img/CatSlider-ec/F.jpg",
  },
  {
    title: "العقود",
    count: 33,
    image:
      "assets/img/CatSlider-ec/f92c3beb93a6c45d6703b6014253661e5da117d8.jpg",
  },
  {
    title: "الأطقم",
    count: 33,
    image: "assets/img/CatSlider-ec/M.jpg",
  },
];

const fullData = [...categoriesData, ...categoriesData];

const wrapper = document.getElementById("categories-wrapper");

fullData.forEach((cat) => {
  const slide = document.createElement("div");
  slide.className =
    "swiper-slide min-w-[386px] min-h-[609px] rounded-[26px] overflow-hidden relative";

  slide.innerHTML = `
      <img alt="Glimmer" src="${cat.image}" class="w-full h-full object-cover" alt="" />
      <div class="absolute text-center bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 class="text-xl font-bold">
          ${cat.title}
          <span class="text-sm font-normal">(${cat.count} قطعة)</span>
        </h3>
        <button class="mt-2 text-sm underline hover:text-[#CE9461] transition" aria-label="icon">تسوق الآن</button>
      </div>
    `;

  wrapper.appendChild(slide);
});

/* توليد القائمة الرئيسيّة */
menuData.forEach((item) => {
  const li = document.createElement("li");

  if (item.children.length === 0) {
    li.innerHTML = `<a href="#" class="block hover:text-[#C98A40] border-b border-[#ffffff36] pb-1">${item.title}</a>`;
  } else {
    li.innerHTML = `<button class="flex justify-between items-center w-full hover:text-[#C98A40] border-b border-[#ffffff36] pb-1"
               data-title="${item.title}" aria-label="icon">
         ${item.title}
         <img alt="Glimmer" src="assets/Icons/down-arrow.svg">
       </button>`;
  }

  menuList.appendChild(li);
});

/* فتح القائمة الفرعيّة */
menuList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-title]");
  if (!btn) return;

  const item = menuData.find((m) => m.title === btn.dataset.title);
  if (!item) return;

  subTitle.textContent = item.title;
  subList.innerHTML = ""; // أفرغ القائمة السابقة

  item.children.forEach((child) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="block hover:text-[#C98A40] border-b border-[#ffffff36] pb-1">${child}</a>`;
    subList.appendChild(li);
  });

  menu.classList.add("translate-x-full");
  subMenu.classList.remove("translate-x-full");
});

/* وظائف الإظهار/الإخفاء */
const openMenu = () => {
  menu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
};
const closeMenu = () => {
  menu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
};
const openMain = () => {
  subMenu.classList.add("translate-x-full");
  menu.classList.remove("translate-x-full");
};
const closeAllFn = () => {
  closeMenu();
  subMenu.classList.add("translate-x-full");
};

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeAllFn);
overlay.addEventListener("click", closeAllFn);
backMain.addEventListener("click", openMain);
closeAll.addEventListener("click", closeAllFn);
const brands = [
  "assets/img/brand/brand(1).svg",
  "assets/img/brand/brand(2).svg",
  "assets/img/brand/brand(3).svg",
  "assets/img/brand/brand(4).svg",
  "assets/img/brand/brand(5).svg",
  "assets/img/brand/brand(1).svg",
  "assets/img/brand/brand(2).svg",
  "assets/img/brand/brand(3).svg",
  "assets/img/brand/brand(4).svg",
  "assets/img/brand/brand(5).svg",
  "assets/img/brand/brand(1).svg",
  "assets/img/brand/brand(2).svg",
  "assets/img/brand/brand(3).svg",
  "assets/img/brand/brand(4).svg",
  "assets/img/brand/brand(5).svg",
  "assets/img/brand/brand(1).svg",
  "assets/img/brand/brand(2).svg",
  "assets/img/brand/brand(3).svg",
  "assets/img/brand/brand(4).svg",
  "assets/img/brand/brand(5).svg",
];
const articles = [
  {
    image: "assets/img/article/article(1).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(2).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(3).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(1).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(2).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(3).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(1).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(2).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(3).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(1).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(2).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
  {
    image: "assets/img/article/article(3).png",
    date: "يناير 2025",
    author: "Admin",
    title: "أحدث صيحات المجوهرات لعام 2025",
    description:
      "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
    link: "#",
  },
];

const products = [
  {
    title: "أسورة جنزير",
    category: "أساور إنسيال",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "/assets/img/Products/product(1).jpg",
    imgHover: "/assets/img/Products/productHover(1).jpg",
    delay: 0,
    hasHoverImage: true,
  },
  {
    title: "اكسسوار باللون الدهبي",
    category: "أكسسوارات شعر",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "/assets/img/Products/product(4).jpg",
    imgHover: "/assets/img/Products/productHover(4).jpg",
    delay: 100,
    hasHoverImage: true,
  },
  {
    title: "العقود",
    category: "العقود",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "/assets/img/Products/product(3).jpg",
    imgHover: "/assets/img/Products/productHover(3).jpg",
    delay: 200,
    hasHoverImage: true,
  },
  {
    title: "خاتم خطبة أنيق",
    category: "الخواتم",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "/assets/img/Products/product(2).jpg",
    imgHover: "/assets/img/Products/productHover(2).jpg",
    delay: 300,
    hasHoverImage: true,
  },
];

const testimonials = [
  {
    name: "فؤاد موجي",
    role: "FrontEnd Developer",
    avatar: "https://i.pravatar.cc/40?img=12",
    text: "لقد كانت تجربتي في هذا المتجر رائعة! التصاميم مذهلة والجودة لا تضاهى. كنت أبحث عن هدية مميزة ، وساعدني فريق العمل بشكل رائع في اختيار القطعة المثالية. كل قطعة مجوهرات كانت مليئة بالأناقة والتفاصيل الدقيقة. خدمة العملاء كانت ممتازة أيضًا، جعلوني أشعر وكأنني في منزلهم. بالتأكيد سأعود للشراء من هنا مرة أخرى.",
  },
  {
    name: "سارة العلي",
    role: "مصممة مجوهرات",
    avatar: "https://i.pravatar.cc/40?img=13",
    text: "خدمة ممتازة وسريعة، والتغليف كان أنيق جدًا. أحببت التفاصيل في كل قطعة وصلتني!",
  },
  {
    name: "محمد حسني",
    role: "مدير مشاريع",
    avatar: "https://i.pravatar.cc/40?img=14",
    text: "من أفضل المتاجر التي تعاملت معها، منتجات فخمة وتعامل راقٍ. أنصح به بشدة.",
  },
  {
    name: "ليلى إبراهيم",
    role: "مهندسة ديكور",
    avatar: "https://i.pravatar.cc/40?img=15",
    text: "كل قطعة وصلتني كانت أجمل من الصور! فريق العمل متعاون جدًا وشحن سريع.",
  },
  {
    name: "أحمد القحطاني",
    role: "مصور محترف",
    avatar: "https://i.pravatar.cc/40?img=16",
    text: "تجربة استثنائية! أعجبني تنسيق الموقع وسهولة الطلب وجودة المنتجات.",
  },
  {
    name: "ريم الشمري",
    role: "كاتبة محتوى",
    avatar: "https://i.pravatar.cc/40?img=17",
    text: "أنصح أي شخص يبحث عن هدية فخمة بالتعامل مع هذا المتجر. شكراً لكم.",
  },
];
/* تكرار إضافي لضمان طول السلايدر مع loop */
const allBrands = [...brands, ...brands, ...brands];

/* عنصر الـ wrapper */
const wrapperBrand = document.getElementById("brand-wrapper");

/* توليد الشرائح ديناميكيًا */
allBrands.forEach((src) => {
  wrapperBrand.insertAdjacentHTML(
    "beforeend",
    `
      <div class="swiper-slide flex justify-center items-center px-4">
        <div class="w-32 aspect-[4/1] flex items-center justify-center">
          <img alt="Glimmer" src="${src}" alt="brand logo" class="h-full w-auto object-contain" />
        </div>
      </div>
      `
  );
});

const ArticleWrapper = document.querySelector(
  ".articlesSwiper .swiper-wrapper"
);

articles.forEach((article) => {
  const slide = document.createElement("div");
  slide.className =
    "swiper-slide max-w-sm bg-white rounded-xl overflow-hidden shadow-sm";
  slide.innerHTML = `
      <img alt="Glimmer" src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover" />
      <div class="p-4 space-y-2 text-right">
        <div class="text-base font-light text-[#CE9461] flex gap-2">
          <span class="flex gap-1 items-center">
            <img alt="Glimmer" src="assets/img/article/clender.svg" class="w-4" />
            ${article.date}
          </span>
          <span class="flex">
            <img alt="Glimmer" class="w-4" src="assets/img/article/user.svg" alt="admin" />
            ${article.author}
          </span>
        </div>
        <h3 class="text-2xl font-medium">${article.title}</h3>
        <p class="text-base text-[#252525B5]">${article.description}</p>
        <a href="${article.link}" class="text-[#CE9461] underline text-xl">عرض المقالة</a>
      </div>
    `;
  ArticleWrapper.appendChild(slide);
});



const testimonialsصrapper = document.getElementById("testimonials-wrapper");

testimonials.forEach((testimonial) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
      <div class="bg-[#1E3231] text-white rounded-[20px] p-6 md:py-10 relative w-full min-h-[385px] overflow-hidden">
        <div class="text-[#CE9461] w-[47px] h-[47px] mb-4">
          <img alt="Glimmer" src="assets/img/testimonial/quote.svg" class="w-full" alt="quote" />
        </div>
        <p class="text-lg md:text-2xl leading-relaxed mb-6 line-clamp-5">
          ${testimonial.text}
        </p>
        <div class="text-[#CE9461] flex justify-end">
          <img alt="Glimmer" src="assets/img/testimonial/quoteBottom.svg" class="w-[47px] h-[47px]" alt="quote" />
        </div>
        <div class="flex items-center gap-4">
          <img alt="Glimmer" src="${testimonial.avatar}" class="w-[62px] h-[62px] rounded-full" alt="${testimonial.name}" />
          <div>
            <h4 class="text-[#CE9461] text-xl md:text-3xl leading-8">${testimonial.name}</h4>
            <p class="text-sm md:text-lg text-[#FFF5E0]">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `;
  testimonialsصrapper.appendChild(slide);
});

const productsGrid = document.getElementById("productsGrid");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className =
    "bg-[#F7F2E9] rounded-xl shadow-md overflow-hidden relative group  transition-all duration-300";
  card.dataset.aos = "fade-up";
  card.dataset.aosDelay = product.delay;

  card.innerHTML = `
      <div class="absolute top-3 left-3 z-10">
        <button class="bg-white p-1 rounded-full shadow hover:bg-red-100 transition" aria-label="icon">
          <img alt="Glimmer" src="/assets/Icons/heart.svg" alt="Favorite" class="w-5 h-5" />
        </button>
      </div>

      <div class="relative rounded-xl overflow-hidden h-[250px] sm:h-[300px]">
        <div class="p-2 h-full">
          <img alt="Glimmer" src="${product.imgMain}" alt="${product.title}"
               class="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105">
        </div>
        <img alt="Glimmer" src="${product.imgHover}" alt="hover"
             class="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out">
        <div
  class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
  
  <!-- زر السلة -->
  <button class="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition" aria-label="icon">
    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
         class="w-5 h-5 text-gray-700">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.99 6.75m0 0H19.5a.75.75 0 01.729.94l-1.5 6a.75.75 0 01-.729.56H6.321a.75.75 0 01-.729-.56L3.5 4.5m2.49 2.25L6.321 14.25M6.321 14.25l-.57 2.28A1.5 1.5 0 007.221 18h9.558a1.5 1.5 0 001.47-1.47l-.57-2.28M6.321 14.25H17.25" />
    </svg>
  </button>

  <!-- زر العرض -->
  <button class="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition" aria-label="icon">
    <svg xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
         class="w-5 h-5 text-gray-700">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.403 4.5 12 4.5s8.577 3.01 9.964 7.183a1.012 1.012 0 010 .639C20.577 16.49 16.597 19.5 12 19.5s-8.577-3.01-9.964-7.183z" />
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </button>
</div>

      </div>

      <div class="p-4">
        <div class="flex items-center justify-between text-sm mt-2">
          <span class="text-lg font-medium text-[#CE9461]">${product.category}</span>
          <div class="flex space-x-1 rtl:space-x-reverse">
            <img alt="Glimmer" src="/assets/img/slider/Group 1618873373.svg" alt="نجوم">
          </div>
        </div>
        <h3 class="md:text-2xl text-base font-medium mt-1 truncate">${product.title}</h3>
        <div class="flex items-center space-x-2 rtl:space-x-reverse mt-1">
          <span class="text-lg font-bold text-[#B70404]">${product.price}</span>
          <span class="text-base text-[#25252580] line-through">${product.oldPrice}</span>
        </div>
      </div>
    `;

  productsGrid.appendChild(card);
});

// FAQ
function toggleFAQ(button) {
  const item = button.closest(".faq-item");
  const isActive = item.classList.contains("active");

  document.querySelectorAll(".faq-item").forEach((el) => {
    el.classList.remove("active");

    // إخفاء الإجابة
    const answer = el.querySelector(".faq-answer");
    answer.style.maxHeight = null;

    // الألوان عند إغلاق
    const span = el.querySelector(".faq-question");
    span.classList.remove("text-[#1E1E1E]");
    span.classList.add("text-[#C98A40]");

    const iconBox = el.querySelector(".faq-icon-box");
    iconBox.classList.remove("bg-[#EAD3B9]");
    iconBox.classList.add("bg-[#CE9461]");

    const icon = el.querySelector(".faq-icon");
    icon.classList.remove("rotate-180");
  });

  if (!isActive) {
    item.classList.add("active");

    const answer = item.querySelector(".faq-answer");
    answer.style.maxHeight = answer.scrollHeight + "px";

    const span = item.querySelector(".faq-question");
    span.classList.remove("text-[#C98A40]");
    span.classList.add("text-[#1E1E1E]");

    const iconBox = item.querySelector(".faq-icon-box");
    iconBox.classList.remove("bg-[#CE9461]");
    iconBox.classList.add("bg-[#EAD3B9]");

    const icon = item.querySelector(".faq-icon");
    icon.classList.add("rotate-180");
  }
}
