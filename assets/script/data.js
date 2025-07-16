// البيانات الأساسية
const menuData = [
  { title: "الرئيسية", children: [] },
  { title: "المدونة", children: [] },
  { title: "الخواتم", children: ["خواتم ذهب", "خواتم فضة", "خواتم ماس"] },
  { title: "العقود", children: ["عقود قصيرة", "عقود ذهب", "عقود أنيقة"] },
  { title: "الساعات", children: ["ساعات رجالي", "ساعات نسائي"] }
];

const categoriesData = [
  {
    title: "الساعات",
    count: 33,
    image: "assets/img/CatSlider-ec/8065d83b935b20576cf696d618179f7e5a5bc333.jpg"
  },
  {
    title: "الأساور",
    count: 33,
    image: "assets/img/CatSlider-ec/b82430b26ad11c68949a7153735bf9e0e84d316e.jpg"
  },
  {
    title: "الحلقان",
    count: 33,
    image: "assets/img/CatSlider-ec/F.jpg"
  },
  {
    title: "العقود",
    count: 33,
    image: "assets/img/CatSlider-ec/f92c3beb93a6c45d6703b6014253661e5da117d8.jpg"
  },
  {
    title: "الأطقم",
    count: 33,
    image: "assets/img/CatSlider-ec/M.jpg"
  },
  {
    title: "الساعات",
    count: 33,
    image: "assets/img/CatSlider-ec/8065d83b935b20576cf696d618179f7e5a5bc333.jpg"
  },
  {
    title: "الأساور",
    count: 33,
    image: "assets/img/CatSlider-ec/b82430b26ad11c68949a7153735bf9e0e84d316e.jpg"
  },
  {
    title: "الحلقان",
    count: 33,
    image: "assets/img/CatSlider-ec/F.jpg"
  },
  {
    title: "العقود",
    count: 33,
    image: "assets/img/CatSlider-ec/f92c3beb93a6c45d6703b6014253661e5da117d8.jpg"
  },
  {
    title: "الأطقم",
    count: 33,
    image: "assets/img/CatSlider-ec/M.jpg"
  }
];

const brands = Array(5).fill().map((_, i) => `assets/img/brand/brand(${i+1}).svg`);

const articles = Array(3).fill().map((_, i) => ({
  image: `assets/img/article/article(${i+1}).png`,
  date: "يناير 2025",
  author: "Admin",
  title: "أحدث صيحات المجوهرات لعام 2025",
  description: "في هذا المقال، نستعرض أبرز صيحات المجوهرات التي ظهرت في عام 2025، من الألوان الجريئة إلى التصاميم الفريدة التي تجعل كل قطعة فريدة من نوعها.",
  link: "#"
}));

const products = [
  {
    title: "أسورة جنزير",
    category: "أساور إنسيال",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "assets/img/Products/product(1).jpg",
    imgHover: "assets/img/Products/productHover(1).jpg",
    delay: 0,
    hasHoverImage: true
  },
  {
    title: "اكسسوار باللون الدهبي",
    category: "أكسسوارات شعر",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "assets/img/Products/product(4).jpg",
    imgHover: "assets/img/Products/productHover(4).jpg",
    delay: 100,
    hasHoverImage: true
  },
  {
    title: "العقود",
    category: "العقود",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "assets/img/Products/product(3).jpg",
    imgHover: "assets/img/Products/productHover(3).jpg",
    delay: 200,
    hasHoverImage: true
  },
  {
    title: "خاتم خطبة أنيق",
    category: "الخواتم",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
    imgMain: "assets/img/Products/product(2).jpg",
    imgHover: "assets/img/Products/productHover(2).jpg",
    delay: 300,
    hasHoverImage: true
  }
];

const testimonials = [
  {
    name: "فؤاد موجي",
    role: "FrontEnd Developer",
    avatar: "https://i.pravatar.cc/40?img=12",
    text: "لقد كانت تجربتي في هذا المتجر رائعة! التصاميم مذهلة والجودة لا تضاهى. كنت أبحث عن هدية مميزة ، وساعدني فريق العمل بشكل رائع في اختيار القطعة المثالية. كل قطعة مجوهرات كانت مليئة بالأناقة والتفاصيل الدقيقة. خدمة العملاء كانت ممتازة أيضًا، جعلوني أشعر وكأنني في منزلهم. بالتأكيد سأعود للشراء من هنا مرة أخرى."
  },
  {
    name: "سارة العلي",
    role: "مصممة مجوهرات",
    avatar: "https://i.pravatar.cc/40?img=13",
    text: "خدمة ممتازة وسريعة، والتغليف كان أنيق جدًا. أحببت التفاصيل في كل قطعة وصلتني!"
  },
  {
    name: "محمد حسني",
    role: "مدير مشاريع",
    avatar: "https://i.pravatar.cc/40?img=14",
    text: "من أفضل المتاجر التي تعاملت معها، منتجات فخمة وتعامل راقٍ. أنصح به بشدة."
  },
  {
    name: "ليلى إبراهيم",
    role: "مهندسة ديكور",
    avatar: "https://i.pravatar.cc/40?img=15",
    text: "كل قطعة وصلتني كانت أجمل من الصور! فريق العمل متعاون جدًا وشحن سريع."
  }
];

export { menuData, categoriesData, brands, articles, products, testimonials };