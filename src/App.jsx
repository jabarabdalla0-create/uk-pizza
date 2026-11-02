import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Flame,
  MapPin,
  Menu as MenuIcon,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  X,
  Utensils,
  Phone,
  Truck,
  Heart,
  Bike,
  Copy,
  ExternalLink,
} from "lucide-react";
import { business, categoryIds, menuItems } from "./data.js";

const copy = {
  en: {
    nav: ["Our story", "Menu", "Visit us"],
    order: "Order now",
    language: "Language",
    heroKicker: "A little taste of Erbil",
    heroTitle: (
      <>
        GOOD FOOD.
        <br />
        <em>GREAT MOMENTS.</em>
      </>
    ),
    heroText:
      "A table full of favourites, made for sharing. Find your next pizza night at UK Pizza, Erbil.",
    explore: "Explore the menu",
    heroNote: "Made fresh. Shared together.",
    scroll: "Scroll to discover",
    ratingLabel: "Loved in Erbil",
    reviews: "Google reviews",
    featuredEyebrow: "The crowd favourites",
    featuredTitle: (
      <>
        Good things
        <br />
        <em>to share.</em>
      </>
    ),
    featuredText:
      "A few ideas to get you started. This draft menu uses sample dishes until the restaurant confirms its full selection.",
    sample: "Sample menu",
    add: "Add to order",
    priceTbd: "Price to be confirmed",
    menuEyebrow: "Something for everyone",
    menuTitle: (
      <>
        Find your
        <br />
        <em>favourite.</em>
      </>
    ),
    menuText:
      "Browse the menu and build a local order request. All sample dishes and prices need confirmation by UK Pizza.",
    menuNote: "Menu preview · Prices are being confirmed",
    categories: {
      all: "All",
      pizza: "Pizza",
      burgers: "Burgers & wraps",
      sides: "Sides",
      drinks: "Drinks",
      desserts: "Desserts",
    },
    noResults: "No menu items in this category yet.",
    storyEyebrow: "From our table to yours",
    storyTitle: (
      <>
        Good food
        <br />
        <em>brings us together.</em>
      </>
    ),
    storyText:
      "The best moments are often the simple ones: a warm table, a favourite slice, and one more story. Join us in Erbil for an easygoing meal, takeaway, or delivery.",
    storyLink: "Come say hello",
    storyTag: "Your neighbourhood pizza stop",
    detailsEyebrow: "Your local favourite",
    detailsTitle: "A little more about us",
    rating: "Google rating",
    priceRange: "Typical spend per person",
    hours: "Hours",
    hoursValue: "Open daily · until 12:00 AM",
    service: "Dine-in · takeaway · no-contact delivery",
    mapLink: "Get directions",
    call: "Call the restaurant",
    locationEyebrow: "Find us in Erbil",
    locationTitle: (
      <>
        Come hungry.
        <br />
        <em>Leave happy.</em>
      </>
    ),
    address: "Address",
    mapCaption: "UK Pizza · Erbil, Kurdistan Region",
    mapCta: "Open in Google Maps",
    orderTitle: (
      <>
        Your next
        <br />
        <em>pizza night.</em>
      </>
    ),
    orderText:
      "Choose your favourites and get in touch with the team to confirm availability and prices.",
    talabat: "Order with Talabat",
    menuLink: "View digital menu",
    contact: "Call us",
    cart: "Your order",
    cartEmpty: "Your basket is looking hungry.",
    cartEmptyHint: "Add a few favourites from the menu to get started.",
    browse: "Browse menu",
    remove: "Remove one",
    increase: "Add one",
    subtotal: "Order estimate",
    totalPending: "Confirmed by restaurant",
    priceNotice:
      "Menu prices are not confirmed yet. The restaurant will confirm your final total.",
    priceNoticeComplete:
      "Prices shown are editable menu data. Confirm availability and delivery with UK Pizza.",
    details: "Your details",
    name: "Name",
    phone: "Phone number",
    delivery: "Delivery address",
    note: "Order notes",
    namePlaceholder: "Your name",
    phonePlaceholder: "0750…",
    deliveryPlaceholder: "Street, area, or landmark",
    notePlaceholder: "Anything the team should know?",
    prepare: "Prepare order details",
    orderPrepared: "Order details are ready",
    prepareHint:
      "This form does not send an online order. Call UK Pizza to confirm the menu, prices, and delivery.",
    callConfirm: "Call to confirm",
    copyOrder: "Copy order summary",
    copied: "Order summary copied",
    formRequired: "Please complete your name, phone, and delivery address.",
    dialogClose: "Close",
    mobileMenu: "Open navigation",
    footerLine: "Good food. Great moments.",
    footerExplore: "Explore",
    footerFind: "Find us",
    instagramLabel: "Instagram (profile link to be added)",
    digitalMenu: "Digital menu",
    sampleBadge: "Illustrative item",
    openStatus: "Open now",
    itemAdded: "Added to your order",
  },
  ku: {
    nav: ["چیرۆکمان", "مێنیو", "سەردانمان بکە"],
    order: "داواکردن",
    language: "زمان",
    heroKicker: "تامێک لە هەولێر",
    heroTitle: (
      <>
        خواردنی خۆش.
        <br />
        <em>ساتەوەختی خۆش.</em>
      </>
    ),
    heroText:
      "مێزێک پڕ لە خواردنی دڵخواز، بۆ هاوبەشکردن. شەوی پیتزای داهاتووت لە UK Pizza لە هەولێر بەسەر ببە.",
    explore: "مێنیو ببینە",
    heroNote: "تازە ئامادەکراو. پێکەوە هاوبەشکراو.",
    scroll: "بەردەوام بە بۆ دۆزینەوە",
    ratingLabel: "خۆشەویستی لە هەولێر",
    reviews: "پێداچوونەوەی گووگڵ",
    featuredEyebrow: "دڵخوازەکانی زۆرینە",
    featuredTitle: (
      <>
        شتە خۆشەکان
        <br />
        <em>بۆ هاوبەشکردن.</em>
      </>
    ),
    featuredText:
      "چەند بیرۆکەیەک بۆ دەستپێکردن. ئەم مێنیو پێشبینینە خواردنی نموونەیی بەکاردەهێنێت تا چێشتخانەکە مێنیوەکەی پشتڕاست بکاتەوە.",
    sample: "مێنیوی نموونەیی",
    add: "زیادکردن بۆ داواکاری",
    priceTbd: "نرخ پێویستی بە پشتڕاستکردنەوە هەیە",
    menuEyebrow: "شتێک بۆ هەمووان",
    menuTitle: (
      <>
        دڵخوازەکەت
        <br />
        <em>بدۆزەرەوە.</em>
      </>
    ),
    menuText:
      "مێنیو بگەڕێ و داواکارییەکی ناوخۆیی دروست بکە. هەموو خواردنە نموونەییەکان و نرخەکان پێویستیان بە پشتڕاستکردنەوە لەلایەن UK Pizza هەیە.",
    menuNote: "پێشبینینی مێنیو · نرخەکان پشتڕاست دەکرێنەوە",
    categories: {
      all: "هەموو",
      pizza: "پیتزا",
      burgers: "بەرگەر و ڕاپ",
      sides: "پاڵاوتەکان",
      drinks: "خواردنەوە",
      desserts: "شیرینی",
    },
    noResults: "لەو بەشەدا خواردنی مێنیو نییە.",
    storyEyebrow: "لە مێزی ئێمەوە بۆ مێزی ئێوە",
    storyTitle: (
      <>
        خواردنی خۆش
        <br />
        <em>ئێمە کۆدەکاتەوە.</em>
      </>
    ),
    storyText:
      "زۆرجار خۆشترین ساتەوەختەکان سادەن: مێزێکی گەرم، پارچەیەکی دڵخواز، و چیرۆکێکی تر. لە هەولێر بۆ خواردن، بردنەوە یان گەیاندن سەردانمان بکە.",
    storyLink: "وەرە سڵاومان لێ بکە",
    storyTag: "شوێنی پیتزای نزیکەکەت",
    detailsEyebrow: "دڵخوازە ناوخۆییەکەت",
    detailsTitle: "زانیاری زیاتر",
    rating: "هەڵسەنگاندنی گووگڵ",
    priceRange: "تێچووی ئاسایی بۆ هەر کەسێک",
    hours: "کاتژمێر",
    hoursValue: "هەموو ڕۆژێک کراوە · تا ١٢ی شەو",
    service: "دانیشتن · بردنەوە · گەیاندنی بێ پەیوەندی",
    mapLink: "ڕێگا بدۆزەرەوە",
    call: "پەیوەندی بە چێشتخانەوە بکە",
    locationEyebrow: "لە هەولێر دۆزمانەوە",
    locationTitle: (
      <>
        بە برسێتی وەرە.
        <br />
        <em>بە دڵخۆشی بڕۆ.</em>
      </>
    ),
    address: "ناونیشان",
    mapCaption: "UK Pizza · هەولێر، هەرێمی کوردستان",
    mapCta: "لە نەخشەی گووگڵدا بیکەرەوە",
    orderTitle: (
      <>
        شەوی پیتزای
        <br />
        <em>داهاتووت.</em>
      </>
    ),
    orderText:
      "دڵخوازەکانت هەڵبژێرە و پەیوەندی بە تیمەکەوە بکە بۆ پشتڕاستکردنەوەی بەردەستبوون و نرخەکان.",
    talabat: "لە تەلەبات داوا بکە",
    menuLink: "مێنیوی دیجیتاڵ ببینە",
    contact: "پەیوەندیمان پێوە بکە",
    cart: "داواکارییەکەت",
    cartEmpty: "سەبەتەکەت چاوەڕوانی خواردنە.",
    cartEmptyHint: "چەند خواردنێکی دڵخواز لە مێنیو زیاد بکە.",
    browse: "مێنیو بگەڕێ",
    remove: "یەک دانە کەم بکە",
    increase: "یەک دانە زیاد بکە",
    subtotal: "خەمڵاندنی داواکاری",
    totalPending: "لە لایەن چێشتخانەوە پشتڕاست دەکرێتەوە",
    priceNotice:
      "نرخی مێنیوەکە پشتڕاست نەکراوەتەوە. چێشتخانە کۆی کۆتایی پشتڕاست دەکاتەوە.",
    priceNoticeComplete:
      "نرخە پیشاندراوەکان زانیاریی دەستکاریکراوی مێنیوەن. بەردەستبوون و گەیاندن لەگەڵ UK Pizza پشتڕاست بکەرەوە.",
    details: "زانیارییەکانت",
    name: "ناو",
    phone: "ژمارەی تەلەفۆن",
    delivery: "ناونیشانی گەیاندن",
    note: "تێبینیی داواکاری",
    namePlaceholder: "ناوت",
    phonePlaceholder: "0750…",
    deliveryPlaceholder: "شەقام، گەڕەک یان نیشانەیەک",
    notePlaceholder: "شتێک هەیە تیمەکە بیزانێت؟",
    prepare: "ئامادەکردنی وردەکارییەکان",
    orderPrepared: "وردەکاریی داواکاری ئامادەیە",
    prepareHint:
      "ئەم فۆڕمە داواکاریی ئۆنلاین نانێرێت. پەیوەندی بە UK Pizza بکە بۆ پشتڕاستکردنەوەی مێنیو، نرخ و گەیاندن.",
    callConfirm: "پەیوەندی بکە بۆ پشتڕاستکردنەوە",
    copyOrder: "کۆپیی پوختەی داواکاری",
    copied: "پوختەی داواکاری کۆپی کرا",
    formRequired: "تکایە ناو، ژمارەی تەلەفۆن و ناونیشانی گەیاندن بنووسە.",
    dialogClose: "داخستن",
    mobileMenu: "کردنەوەی ڕێنیشاندەر",
    footerLine: "خواردنی خۆش. ساتەوەختی خۆش.",
    footerExplore: "بگەڕێ",
    footerFind: "دۆزمانەوە",
    instagramLabel: "ئینستاگرام (لینکی پڕۆفایل زیاد دەکرێت)",
    digitalMenu: "مێنیوی دیجیتاڵ",
    sampleBadge: "خواردنی نموونەیی",
    openStatus: "ئێستا کراوە",
    itemAdded: "زیاد کرا بۆ داواکارییەکەت",
  },
  ar: {
    nav: ["قصتنا", "القائمة", "زرنا"],
    order: "اطلب الآن",
    language: "اللغة",
    heroKicker: "نكهة من أربيل",
    heroTitle: (
      <>
        طعام لذيذ.
        <br />
        <em>لحظات أجمل.</em>
      </>
    ),
    heroText:
      "مائدة مليئة بالأطباق المحبوبة لتستمتعوا بها معاً. اكتشفوا وجهتكم القادمة للبيتزا في يو كي بيتزا، أربيل.",
    explore: "اكتشف القائمة",
    heroNote: "طازج دائماً. نتشاركه معاً.",
    scroll: "تابعوا لاكتشاف المزيد",
    ratingLabel: "محبوب في أربيل",
    reviews: "تقييمات Google",
    featuredEyebrow: "المفضلة لدى الجميع",
    featuredTitle: (
      <>
        أطباق لذيذة
        <br />
        <em>للمشاركة.</em>
      </>
    ),
    featuredText:
      "بعض الأفكار لتبدأوا بها. تستخدم هذه القائمة التجريبية أطباقاً نموذجية إلى أن يؤكد المطعم قائمته الكاملة.",
    sample: "قائمة تجريبية",
    add: "أضف إلى الطلب",
    priceTbd: "السعر قيد التأكيد",
    menuEyebrow: "خيارات تناسب الجميع",
    menuTitle: (
      <>
        اعثر على
        <br />
        <em>مفضلتك.</em>
      </>
    ),
    menuText:
      "تصفح القائمة وجهز طلباً محلياً. يجب تأكيد جميع الأطباق النموذجية والأسعار من يو كي بيتزا.",
    menuNote: "معاينة القائمة · الأسعار قيد التأكيد",
    categories: {
      all: "الكل",
      pizza: "بيتزا",
      burgers: "برغر وراب",
      sides: "أطباق جانبية",
      drinks: "مشروبات",
      desserts: "حلويات",
    },
    noResults: "لا توجد أطباق في هذا القسم بعد.",
    storyEyebrow: "من مائدتنا إلى مائدتكم",
    storyTitle: (
      <>
        الطعام اللذيذ
        <br />
        <em>يجمعنا.</em>
      </>
    ),
    storyText:
      "غالباً ما تكون أجمل اللحظات بسيطة: مائدة دافئة، شريحة مفضلة، وقصة أخرى. زورونا في أربيل لتناول الطعام أو الاستلام أو التوصيل.",
    storyLink: "أهلاً بكم",
    storyTag: "وجهتكم القريبة للبيتزا",
    detailsEyebrow: "مفضلكم المحلي",
    detailsTitle: "معلومات أكثر عنا",
    rating: "تقييم Google",
    priceRange: "متوسط الإنفاق للفرد",
    hours: "ساعات العمل",
    hoursValue: "مفتوح يومياً · حتى 12:00 ليلاً",
    service: "تناول في المطعم · استلام · توصيل دون تلامس",
    mapLink: "احصل على الاتجاهات",
    call: "اتصل بالمطعم",
    locationEyebrow: "زورونا في أربيل",
    locationTitle: (
      <>
        تعالوا جائعين.
        <br />
        <em>غادروا سعداء.</em>
      </>
    ),
    address: "العنوان",
    mapCaption: "يو كي بيتزا · أربيل، إقليم كردستان",
    mapCta: "افتح في خرائط Google",
    orderTitle: (
      <>
        ليلة البيتزا
        <br />
        <em>القادمة.</em>
      </>
    ),
    orderText:
      "اختاروا أطباقكم المفضلة وتواصلوا مع الفريق لتأكيد التوفر والأسعار.",
    talabat: "اطلب عبر طلبات",
    menuLink: "شاهد القائمة الرقمية",
    contact: "اتصل بنا",
    cart: "طلبكم",
    cartEmpty: "سلتكم بانتظار الطعام.",
    cartEmptyHint: "أضيفوا بعض أطباقكم المفضلة من القائمة للبدء.",
    browse: "تصفح القائمة",
    remove: "احذف واحدة",
    increase: "أضف واحدة",
    subtotal: "تقدير الطلب",
    totalPending: "يؤكده المطعم",
    priceNotice: "أسعار القائمة غير مؤكدة بعد. سيؤكد المطعم المبلغ النهائي.",
    priceNoticeComplete:
      "الأسعار المعروضة بيانات قائمة قابلة للتعديل. يرجى تأكيد التوفر والتوصيل مع يو كي بيتزا.",
    details: "بياناتكم",
    name: "الاسم",
    phone: "رقم الهاتف",
    delivery: "عنوان التوصيل",
    note: "ملاحظات الطلب",
    namePlaceholder: "اسمكم",
    phonePlaceholder: "0750…",
    deliveryPlaceholder: "الشارع أو المنطقة أو معلم قريب",
    notePlaceholder: "هل هناك شيء يحتاج الفريق إلى معرفته؟",
    prepare: "جهز تفاصيل الطلب",
    orderPrepared: "تفاصيل الطلب جاهزة",
    prepareHint:
      "هذا النموذج لا يرسل طلباً عبر الإنترنت. اتصلوا بيو كي بيتزا لتأكيد القائمة والأسعار والتوصيل.",
    callConfirm: "اتصل للتأكيد",
    copyOrder: "انسخ ملخص الطلب",
    copied: "تم نسخ ملخص الطلب",
    formRequired: "يرجى إدخال الاسم والهاتف وعنوان التوصيل.",
    dialogClose: "إغلاق",
    mobileMenu: "افتح التنقل",
    footerLine: "طعام لذيذ. لحظات أجمل.",
    footerExplore: "استكشف",
    footerFind: "اعثر علينا",
    instagramLabel: "إنستغرام (سيضاف رابط الحساب الرسمي)",
    digitalMenu: "القائمة الرقمية",
    sampleBadge: "طبق توضيحي",
    openStatus: "مفتوح الآن",
    itemAdded: "أُضيف إلى طلبكم",
  },
};

const languageMeta = {
  en: { label: "EN", name: "English", dir: "ltr" },
  ku: { label: "KU", name: "کوردی", dir: "rtl" },
  ar: { label: "عربي", name: "العربية", dir: "rtl" },
};
const foodFallback =
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85";
const formatMoney = (value) =>
  new Intl.NumberFormat("en-IQ", {
    style: "currency",
    currency: "IQD",
    maximumFractionDigits: 0,
  }).format(value);

function Brand({ compact = false }) {
  return (
    <a
      className={`brand ${compact ? "brand--compact" : ""}`}
      href="#top"
      aria-label="UK Pizza home"
    >
      <span className="brand-mark">UK</span>
      <span className="brand-type">
        <strong>UK</strong>
        <small>PIZZA</small>
      </span>
    </a>
  );
}

function InstagramGlyph() {
  return (
    <svg
      aria-hidden="true"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r=".75" fill="currentColor" />
    </svg>
  );
}

function FoodImage({ src, alt, className = "" }) {
  return (
    <div className={`food-image ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = foodFallback;
        }}
      />
    </div>
  );
}

function ProductCard({ item, t, onAdd, language, compact = false }) {
  const name = item.name[language] || item.name.en;
  const description = item.description[language] || item.description.en;
  return (
    <article
      className={`product-card ${compact ? "product-card--compact" : ""}`}
    >
      <div className="product-card__photo-wrap">
        <FoodImage
          src={item.image}
          alt={name}
          className="product-card__photo"
        />
        <span className="sample-chip">
          <span />
          {t.sampleBadge}
        </span>
        {item.featured && (
          <span className="popular-chip">
            <Flame size={13} /> {t.featuredEyebrow}
          </span>
        )}
      </div>
      <div className="product-card__body">
        <div className="product-card__copy">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="product-card__bottom">
          <span className="price-note">
            {item.price == null ? t.priceTbd : formatMoney(item.price)}
          </span>
          <button
            className="add-button"
            type="button"
            onClick={() => onAdd(item.id)}
            aria-label={`${t.add}: ${name}`}
          >
            <Plus size={17} />
            <span>{t.add}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("ukpizza-language") || "en",
  );
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [toast, setToast] = useState("");
  const [orderPrepared, setOrderPrepared] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    delivery: "",
    note: "",
  });
  const [formError, setFormError] = useState(false);
  const t = copy[language] || copy.en;
  const rtl = languageMeta[language].dir === "rtl";
  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const itemCount = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0,
  );
  const cartLines = useMemo(
    () =>
      menuItems
        .filter((item) => cart[item.id])
        .map((item) => ({ ...item, quantity: cart[item.id] })),
    [cart],
  );
  const allPricesConfirmed =
    cartLines.length > 0 &&
    cartLines.every((item) => Number.isFinite(item.price));
  const cartTotal = allPricesConfirmed
    ? cartLines.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : null;
  const visibleItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);
  const featuredItems = menuItems.filter((item) => item.featured);

  useEffect(() => {
    document.documentElement.lang = language === "ku" ? "ckb" : language;
    document.documentElement.dir = languageMeta[language].dir;
    localStorage.setItem("ukpizza-language", language);
  }, [language]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2300);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!cartOpen && !mobileOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setCartOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cartOpen, mobileOpen]);

  function addToCart(id) {
    setCart((current) => ({ ...current, [id]: (current[id] || 0) + 1 }));
    setOrderPrepared(false);
    setToast(t.itemAdded);
  }

  function changeQuantity(id, amount) {
    setCart((current) => {
      const quantity = (current[id] || 0) + amount;
      const next = { ...current };
      if (quantity <= 0) delete next[id];
      else next[id] = quantity;
      return next;
    });
    setOrderPrepared(false);
  }

  function submitOrder(event) {
    event.preventDefault();
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.delivery.trim() ||
      cartLines.length === 0
    ) {
      setFormError(true);
      return;
    }
    setFormError(false);
    setOrderPrepared(true);
  }

  async function copyOrderSummary() {
    const lines = cartLines
      .map(
        (item) => `${item.quantity} × ${item.name[language] || item.name.en}`,
      )
      .join("\n");
    const summary = `UK Pizza order request\n${form.name} · ${form.phone}\n${form.delivery}\n\n${lines}\n\nPrices and availability to be confirmed by UK Pizza.${form.note ? `\nNote: ${form.note}` : ""}`;
    try {
      await navigator.clipboard.writeText(summary);
      setToast(t.copied);
    } catch {
      setToast(t.copyOrder);
    }
  }

  function updateForm(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className={`site-shell ${rtl ? "is-rtl" : ""}`}>
      <div className="topline">
        <span>{t.ratingLabel}</span>
        <span className="topline-dot" />
        <span>{t.hoursValue}</span>
        <a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a>
      </div>
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">{t.nav[0]}</a>
          <a href="#menu">{t.nav[1]}</a>
          <a href="#visit">{t.nav[2]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={t.language}>
            {Object.entries(languageMeta).map(([code, meta]) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={language === code ? "is-active" : ""}
                aria-pressed={language === code}
                title={meta.name}
              >
                {meta.label}
              </button>
            ))}
          </div>
          <button
            className="cart-trigger"
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`${t.cart}, ${itemCount} items`}
          >
            <ShoppingBag size={17} />
            <span>{t.order}</span>
            {itemCount > 0 && <b>{itemCount}</b>}
          </button>
          <button
            className="mobile-trigger"
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={t.mobileMenu}
          >
            <MenuIcon size={21} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=2200&q=90"
              alt=""
            />
          </div>
          <div className="hero-vignette" />
          <div className="hero-content page-gutter">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-line" />
                {t.heroKicker}
              </div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-description">{t.heroText}</p>
              <div className="hero-buttons">
                <a href="#menu" className="button button--red">
                  {t.explore}
                  <Arrow size={17} />
                </a>
                <a
                  href={business.talabatUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link text-link--light"
                >
                  {t.order}
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="hero-note">
                <span className="hero-note-icon">
                  <Utensils size={15} />
                </span>
                {t.heroNote}
              </div>
            </div>
            <div className="hero-aside">
              <span className="hero-aside-line" />
              <span>
                ERBIL
                <br />
                KURDISTAN
              </span>
            </div>
            <div className="hero-stamp">
              <span className="stamp-star">✳</span>
              <span>
                GOOD
                <br />
                FOOD
              </span>
              <span className="stamp-small">• MADE TO SHARE •</span>
            </div>
          </div>
          <div className="hero-bottom page-gutter">
            <a href="#story" className="scroll-link">
              <span>
                <ArrowDown size={14} />
              </span>
              {t.scroll}
            </a>
            <span className="hero-bottom-caption">
              UK PIZZA <i>·</i> ERBIL, IRAQ
            </span>
          </div>
          <div className="hero-orbit" aria-hidden="true" />
        </section>

        <section className="trust-strip" aria-label="Restaurant details">
          <div className="trust-item trust-rating">
            <div className="star-row">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
            <strong>
              {business.rating}
              <span>/5</span>
            </strong>
            <small>
              {t.reviews} · {business.reviewCount}
            </small>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <Clock3 size={20} />
            <div>
              <strong>{t.openStatus}</strong>
              <small>{t.hoursValue}</small>
            </div>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <Truck size={21} />
            <div>
              <strong>{t.service}</strong>
              <small>
                {business.spendRange} <span>/ person</span>
              </small>
            </div>
          </div>
          <a
            className="trust-map"
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={17} />
            <span>{t.mapLink}</span>
            <ArrowUpRight size={14} />
          </a>
        </section>

        <section
          className="featured-section section-space page-gutter"
          id="story"
        >
          <div className="section-heading section-heading--split">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.featuredEyebrow}
              </div>
              <h2>{t.featuredTitle}</h2>
            </div>
            <div className="heading-side">
              <p>{t.featuredText}</p>
              <a href="#menu" className="text-link">
                {t.explore}
                <Arrow size={15} />
              </a>
            </div>
          </div>
          <div className="featured-grid">
            {featuredItems.slice(0, 3).map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                t={t}
                onAdd={addToCart}
                language={language}
                compact
              />
            ))}
          </div>
          <div className="draft-note">
            <span className="draft-note-mark">i</span>
            <span>{t.menuNote}</span>
            <span className="draft-note-rule" />
          </div>
        </section>

        <section className="menu-section section-space page-gutter" id="menu">
          <div className="menu-heading">
            <div>
              <div className="eyebrow eyebrow--light">
                <span className="eyebrow-line" />
                {t.menuEyebrow}
              </div>
              <h2>{t.menuTitle}</h2>
            </div>
            <p>{t.menuText}</p>
          </div>
          <div className="menu-toolbar">
            <div
              className="category-list"
              role="tablist"
              aria-label={t.menuEyebrow}
            >
              {categoryIds.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "is-active" : ""}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
            <span className="menu-count">
              {t.sample} <span>·</span>{" "}
              {visibleItems.length.toString().padStart(2, "0")}
            </span>
          </div>
          <div className="menu-grid">
            {visibleItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                t={t}
                onAdd={addToCart}
                language={language}
              />
            ))}
            {visibleItems.length === 0 && (
              <div className="menu-empty">{t.noResults}</div>
            )}
          </div>
        </section>

        <section className="story-section page-gutter">
          <div className="story-visual">
            <div className="story-photo">
              <img
                src="/assets/uk-pizza-exterior.png"
                alt="UK Pizza restaurant exterior in Erbil, with outdoor seating"
                loading="lazy"
              />
            </div>
            <div className="story-photo-tag">
              <span className="tag-dot" />
              <span>{t.storyTag}</span>
            </div>
            <div className="story-visual-number">
              UK
              <br />
              <span>✳</span>
            </div>
          </div>
          <div className="story-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {t.storyEyebrow}
            </div>
            <h2>{t.storyTitle}</h2>
            <p>{t.storyText}</p>
            <a href="#visit" className="button button--outline">
              {t.storyLink}
              <Arrow size={16} />
            </a>
          </div>
        </section>

        <section
          className="details-section section-space page-gutter"
          id="visit"
        >
          <div className="details-intro">
            <div className="eyebrow eyebrow--light">
              <span className="eyebrow-line" />
              {t.detailsEyebrow}
            </div>
            <h2>{t.detailsTitle}</h2>
            <p>{t.service}</p>
            <a
              className="button button--cream"
              href={`tel:${business.phoneLink}`}
            >
              <Phone size={16} />
              {t.call}
            </a>
          </div>
          <div className="details-grid">
            <article className="detail-card detail-card--rating">
              <div className="detail-icon">
                <Star size={18} fill="currentColor" />
              </div>
              <span>{t.rating}</span>
              <strong>
                {business.rating}
                <small> / 5</small>
              </strong>
              <div className="detail-stars">★★★★★</div>
              <small>
                {business.reviewCount} {t.reviews}
              </small>
            </article>
            <article className="detail-card">
              <div className="detail-icon">
                <Clock3 size={18} />
              </div>
              <span>{t.hours}</span>
              <strong className="detail-regular">{t.hoursValue}</strong>
              <small>{t.openStatus}</small>
            </article>
            <article className="detail-card">
              <div className="detail-icon">
                <Heart size={18} />
              </div>
              <span>{t.priceRange}</span>
              <strong className="detail-regular">{business.spendRange}</strong>
              <small>IQD / person</small>
            </article>
            <article className="detail-card">
              <div className="detail-icon">
                <Bike size={18} />
              </div>
              <span>{t.service}</span>
              <strong className="detail-regular">
                {business.phoneDisplay}
              </strong>
              <a href={`tel:${business.phoneLink}`}>{t.call}</a>
            </article>
          </div>
        </section>

        <section className="location-section section-space page-gutter">
          <div className="location-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {t.locationEyebrow}
            </div>
            <h2>{t.locationTitle}</h2>
            <div className="address-label">
              <MapPin size={16} />
              {t.address}
            </div>
            <p className="address-text">{business.address}</p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              {t.mapCta}
              <ArrowUpRight size={15} />
            </a>
          </div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="map-card"
            aria-label={t.mapCta}
          >
            <div className="map-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="map-pin">
              <span>
                <MapPin size={20} fill="currentColor" />
              </span>
              <b>
                UK
                <br />
                PIZZA
              </b>
            </div>
            <div className="map-caption">
              <span>
                <strong>{t.mapCaption}</strong>
                <small>{business.address}</small>
              </span>
              <span className="map-open">
                <ArrowUpRight size={17} />
              </span>
            </div>
          </a>
        </section>

        <section className="final-cta page-gutter">
          <div className="final-cta-image" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=85"
              alt=""
            />
          </div>
          <div className="final-cta-content">
            <span className="cta-kicker">
              UK PIZZA <i>·</i> ERBIL
            </span>
            <h2>{t.orderTitle}</h2>
            <p>{t.orderText}</p>
            <div className="cta-actions">
              <a
                className="button button--cream"
                href={business.talabatUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.talabat}
                <ArrowUpRight size={16} />
              </a>
              <a
                className="cta-secondary"
                href={business.digitalMenuUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.menuLink}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          <div className="cta-stamp" aria-hidden="true">
            ✳
          </div>
        </section>
      </main>

      <footer className="site-footer page-gutter">
        <div className="footer-main">
          <div>
            <Brand compact />
            <p>
              {t.footerLine}
              <br />
              Erbil, Kurdistan Region
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>{t.footerExplore}</span>
              <a href="#story">{t.nav[0]}</a>
              <a href="#menu">{t.nav[1]}</a>
              <a href="#visit">{t.nav[2]}</a>
            </div>
            <div>
              <span>{t.footerFind}</span>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer">
                {t.mapLink}
              </a>
              <a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a>
              <a
                href={business.digitalMenuUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.digitalMenu}
              </a>
            </div>
          </div>
          <a
            className="instagram-link"
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t.instagramLabel}
          >
            <InstagramGlyph />
            <span>{t.instagramLabel}</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UK Pizza, Erbil</span>
          <span>
            GOOD FOOD <i>·</i> GREAT MOMENTS
          </span>
          <a href={business.talabatUrl} target="_blank" rel="noreferrer">
            {t.order}
            <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>

      {mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileOpen(false)}
        >
          <nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-nav-head">
              <Brand />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={t.dialogClose}
              >
                <X />
              </button>
            </div>
            <a href="#story" onClick={() => setMobileOpen(false)}>
              {t.nav[0]}
              <Arrow size={16} />
            </a>
            <a href="#menu" onClick={() => setMobileOpen(false)}>
              {t.nav[1]}
              <Arrow size={16} />
            </a>
            <a href="#visit" onClick={() => setMobileOpen(false)}>
              {t.nav[2]}
              <Arrow size={16} />
            </a>
            <div className="mobile-nav-languages">
              {Object.entries(languageMeta).map(([code, meta]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setLanguage(code);
                    setMobileOpen(false);
                  }}
                  className={language === code ? "is-active" : ""}
                >
                  {meta.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            aria-label={t.cart}
            aria-modal="true"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-head">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-line" />
                  UK PIZZA
                </span>
                <h2>
                  {t.cart}
                  <span className="drawer-count">
                    {itemCount.toString().padStart(2, "0")}
                  </span>
                </h2>
              </div>
              <button
                type="button"
                className="icon-button"
                onClick={() => setCartOpen(false)}
                aria-label={t.dialogClose}
              >
                <X size={20} />
              </button>
            </div>
            {cartLines.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-bag">
                  <ShoppingBag size={26} />
                </div>
                <h3>{t.cartEmpty}</h3>
                <p>{t.cartEmptyHint}</p>
                <a
                  href="#menu"
                  className="button button--red"
                  onClick={() => setCartOpen(false)}
                >
                  {t.browse}
                  <Arrow size={16} />
                </a>
              </div>
            ) : (
              <div className="drawer-scroll">
                <div className="cart-items">
                  {cartLines.map((item) => {
                    const name = item.name[language] || item.name.en;
                    return (
                      <div className="cart-line" key={item.id}>
                        <FoodImage
                          src={item.image}
                          alt={name}
                          className="cart-line__image"
                        />
                        <div className="cart-line__detail">
                          <strong>{name}</strong>
                          <small>
                            {item.price == null
                              ? t.priceTbd
                              : formatMoney(item.price)}
                          </small>
                          <div className="quantity-control">
                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, -1)}
                              aria-label={`${t.remove}: ${name}`}
                            >
                              <Minus size={13} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, 1)}
                              aria-label={`${t.increase}: ${name}`}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>
                        <button
                          className="remove-line"
                          type="button"
                          onClick={() =>
                            changeQuantity(item.id, -item.quantity)
                          }
                          aria-label={`${t.remove}: ${name}`}
                        >
                          <X size={15} />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="price-summary">
                  <span>{t.subtotal}</span>
                  <strong>
                    {allPricesConfirmed
                      ? formatMoney(cartTotal)
                      : t.totalPending}
                  </strong>
                </div>
                <p className="price-disclaimer">
                  {allPricesConfirmed ? t.priceNoticeComplete : t.priceNotice}
                </p>
                {!orderPrepared ? (
                  <form
                    className="order-form"
                    onSubmit={submitOrder}
                    noValidate
                  >
                    <h3>{t.details}</h3>
                    <label>
                      {t.name}
                      <input
                        name="name"
                        value={form.name}
                        onChange={updateForm}
                        placeholder={t.namePlaceholder}
                        autoComplete="name"
                      />
                    </label>
                    <label>
                      {t.phone}
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={updateForm}
                        placeholder={t.phonePlaceholder}
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </label>
                    <label>
                      {t.delivery}
                      <input
                        name="delivery"
                        value={form.delivery}
                        onChange={updateForm}
                        placeholder={t.deliveryPlaceholder}
                        autoComplete="street-address"
                      />
                    </label>
                    <label>
                      {t.note}
                      <textarea
                        name="note"
                        value={form.note}
                        onChange={updateForm}
                        placeholder={t.notePlaceholder}
                        rows="2"
                      />
                    </label>
                    {formError && (
                      <p className="form-error">{t.formRequired}</p>
                    )}
                    <button
                      className="button button--red button--full"
                      type="submit"
                    >
                      {t.prepare}
                      <Arrow size={16} />
                    </button>
                    <p className="form-hint">{t.prepareHint}</p>
                  </form>
                ) : (
                  <div className="order-success">
                    <span className="success-check">
                      <Check size={18} />
                    </span>
                    <h3>{t.orderPrepared}</h3>
                    <p>{t.prepareHint}</p>
                    <a
                      className="button button--red button--full"
                      href={`tel:${business.phoneLink}`}
                    >
                      <Phone size={16} />
                      {t.callConfirm}
                    </a>
                    <button
                      type="button"
                      className="copy-order"
                      onClick={copyOrderSummary}
                    >
                      <Copy size={15} />
                      {t.copyOrder}
                    </button>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      )}

      {toast && (
        <div className="toast" role="status">
          <Check size={16} />
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
