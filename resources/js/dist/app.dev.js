"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueI18n = _interopRequireDefault(require("vue-i18n"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vuetify = _interopRequireDefault(require("vuetify"));

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

var _router = _interopRequireDefault(require("./Router/router.js"));

var _store = _interopRequireDefault(require("./store"));

var _message, _message2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");

window.Vue = require("vue");

// // import style
// import 'swiper/css/swiper.css'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'
_vue["default"].use(_vueAwesomeSwiper["default"]
/* { default options with global component } */
);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


_vue["default"].use(_vuetify["default"]);

_vue["default"].use(_vueRouter["default"]);

_vue["default"].use(_vueI18n["default"]);

var lang = localStorage.getItem("locale") || "en";
var messages = {
  en: {
    message: (_message = {
      home: "Home",
      loading: "Loading",
      shopart: "Shop Art",
      about: "About",
      introducing: "INTRODUCING",
      fineart: "Fine Art",
      shoppers: "shoppers",
      live: "LIVE",
      shopnow: "Shop Now",
      newrelease: "New Release",
      newreleaseheader: "THIS WEEK’S RELEASE OF LIMITED ARTWORKS",
      readmore: "Read More >",
      readless: "Read Less",
      ourmission: "Our Mission",
      ourmissiontext1: "You, like everyone else on this planet, were born a creative person with good intentions. Able to change the world in ways so much bigger than you probably can imagine right now. All the rules of society then programmed you to think and calculate yourself through life in a way that is useful and not disturbing anyone else. Conforming to this norm made you fit in, but also stripped you of your boundless childlike creativity, imagination and lust for exploration.",
      ourmissiontext2: "Right now, what the world needs most, is people who find that version of themselves back again. People who come alive again. People who wonder, can be amazed and feel ecstatic like they did when they were little kids. Bringing you alive again, and reminding you of the version of yourself that can do anything, that is our mission. ",
      artists: "Artists",
      artisttext: "Behind every artwork we sell, there are ideas, visions, amazing artists and great stories. On this page we highlight some of that. If you want to learn more about an artwork you are about to buy, but the artist is not listed on this page, click on their name during shopping and you will get redirected straight to their most important social media account or website.",
      cart: "Add To Cart",
      customerreviews: "Customer Reviews",
      review: "Review",
      writereview: "Write Review",
      score: "Score",
      share: "Share",
      checkreview: "Was This Review Helpful",
      signup: "Sign up for a notification email when new limited artworks are released.",
      Newsletter: "Newsletter",
      SUBSCRIBE: "Join Us",
      others: "Others",
      company: "Company",
      Limitworks: "LIMITED ARTWORKS",
      name: "Your Name",
      email: "Your Email",
      phone: "Your Phone",
      submit: "Submit",
      // productslider
      size: "Size",
      productDetails: "Product Details ",
      shipping: "Shipping",
      left: "Left",
      imgdetails: "Img Details",
      limitedEdition: "Limited Edition",
      //    cart
      checkout: "CheckOut",
      total: "Total Price",
      remove: "Remove ",
      cartname: "Cart",
      // footer
      logo: "Naqsh",
      lorem: "lorem text"
    }, _defineProperty(_message, "email", "E-mail"), _defineProperty(_message, "firstname", "First Name"), _defineProperty(_message, "lastname", "Last Name"), _defineProperty(_message, "address", "Address"), _defineProperty(_message, "appartment", "Apartment, Suite, etc. (optional)"), _defineProperty(_message, "city", "City"), _defineProperty(_message, "phone", "Phone"), _defineProperty(_message, "postcode", "Post Code "), _defineProperty(_message, "discount", "Discount"), _defineProperty(_message, "Aplly", "APPLY"), _defineProperty(_message, "subtotal", "Sub Total"), _defineProperty(_message, "total", "Total"), _defineProperty(_message, "calulated", "Calculated at next"), _defineProperty(_message, "toshipping", "Continue to Shipping"), _defineProperty(_message, "select_size", "Please Select Size"), _defineProperty(_message, "showorder", "Show Order Summary"), _defineProperty(_message, "hideorder", "Hide Order Summary"), _defineProperty(_message, "empty", "      "), _defineProperty(_message, "addressfooter", "Naqsh BV. Westplein 123016BM RotterdamThe Netherlands"), _defineProperty(_message, "shopfooter", "Shop artworks"), _defineProperty(_message, "aboutfooter", "About our products"), _defineProperty(_message, "carreerfooter", "Careers"), _defineProperty(_message, "aboutusfooter", "Our Mission"), _defineProperty(_message, "artistfooter", "Our Artists"), _defineProperty(_message, "contactfooter", "Contact us"), _defineProperty(_message, "termsfooter", "Terms of use"), _defineProperty(_message, "privacyfooter", "Privacy Policy"), _defineProperty(_message, "refundpolicy", "Refund Policy"), _defineProperty(_message, "socialLink", "SocialLink"), _defineProperty(_message, "solidout", "SOLD OUT"), _defineProperty(_message, "support", "Contact Us"), _defineProperty(_message, "support_text", "Do you have any questions? Have a look at the categories below, and if these dont include the answer you were looking for, please feel free to shoot us an email."), _defineProperty(_message, "Product", "Product"), _defineProperty(_message, "Shipping", "Shipping"), _defineProperty(_message, "Collabs", "Collabs"), _defineProperty(_message, "contact", "Contact"), _defineProperty(_message, "product_text1", "What are Walltones?"), _defineProperty(_message, "product_text2", "What are Knitworks?"), _defineProperty(_message, "product_text3", "How do I assemble my Walltone?"), _defineProperty(_message, "product_text4", "How do I assemble my Knitwork?"), _defineProperty(_message, "product_text5", "What are the exact dimensions/materials of my artwork?"), _defineProperty(_message, "product_text6", "I need any tools to hang my artwork?"), _defineProperty(_message, "product_text7", "Walltones are our affordable and easy to hang canvas posters. They come in three different sizes, always complete with a special magnetic frame. Each Walltone is part of a limited edition."), _defineProperty(_message, "product_text8", "Knitworks are luxurious artworks on fabric, often using a combination of printing and painting techniques. The fabric is stretchedinto a sturdy metal frame. Like Walltones, they are always part of a limited edition."), _defineProperty(_message, "product_text9", "Align the pairs of magnetic frames with the top and bottom of your artwork.The included adhesive strips or screw can be used to stick only the top frame, or both frames to your wall."), _defineProperty(_message, "product_text10", "You can find Knitwork assembly instructions on the manual inside the box."), _defineProperty(_message, "product_text11", "When you buy an artwork, you can find the specifications in the dropdown menus underneath the product description. If you have any questions not answered in there, feel free to ask us."), _defineProperty(_message, "product_text12", "If the included adhesive strips are not suitable for your wall,you can use the included screw and plug. Only when using the screw and plug you will need a drill and screwdriver."), _defineProperty(_message, "ship_text1", "Do you ship to my country?"), _defineProperty(_message, "ship_text2", "What about returns and shipping time?"), _defineProperty(_message, "ship_text3", "We ship worldwide. If you are worried that your country might not accept our products because of regulation or customs policies, please send us an email explaining the situation and we will try to find out what is the best solution."), _defineProperty(_message, "ship_text4", "After placing your order, the whole process of preparing, packing and shipping to your doorstep can take approximately 15 business days depending on your location. Orders get sent out within 24 hours on average, after which you wont be able to cancel our order since the package will already be in transit. You can however, return your package for a full refund within 30 days."), _defineProperty(_message, "Collabs_text1", "I am an artist, how can we work together?"), _defineProperty(_message, "Collabs_text2", "I am an influencer, how can we work together?"), _defineProperty(_message, "Collabs_text3", "Awesome! Please send us an email with a link to your portfolio, instagram,or any other media you want us to review. We will be happy to take a look."), _defineProperty(_message, "Collabs_text4", "We dont work with a lot of influencers, but if you connect with an audience that you think would love our brand, we are very open to talk about it. Please shoot us an email!"), _defineProperty(_message, "Terms", "Terms"), _defineProperty(_message, "Terms_text1", "What are the terms of this website?"), _defineProperty(_message, "Terms_text2", "How do you treat my privacy?"), _defineProperty(_message, "Terms_text3", "How can I get a refund?"), _defineProperty(_message, "Terms_text4", "Read our terms"), _defineProperty(_message, "Terms_text5", "Read our Privacy Policy"), _defineProperty(_message, "Terms_text6", "Read our Refund Policy"), _defineProperty(_message, "noitem", "There are no products. Please add an entry to complete the process!!"), _defineProperty(_message, "Print_material", "Print material:"), _defineProperty(_message, "Print_ink", "Print ink:"), _defineProperty(_message, "Print_finish", "Print finish:"), _defineProperty(_message, "Frame_material", "Frame material:"), _defineProperty(_message, "Frame_finish", "Frame finish:"), _message)
  },
  ar: {
    message: (_message2 = {
      home: "الصفحه الرئيسيه",
      loading: "يرجى الانتظار",
      shopart: "متجر الفن",
      about: "من نحن",
      introducing: "مقدمه",
      fineart: "فن راقي",
      shoppers: "مشتري",
      live: "مباشر",
      shopnow: "اشتري اﻷن",
      newrelease: "إصدار جديد",
      newreleaseheader: "إصدار هذا الأسبوع من الأعمال الفنية المحدودة",
      readless: "إقرأ أقل",
      readmore: "إقرأ أكثر",
      ourmission: "مهمتنا",
      ourmissiontext1: " أنت ، مثل أي شخص آخر على هذا الكوكب ، ولدت شخصًا مبدعًا بحسن نية. قادرة على تغيير العالم بطرق أكبر بكثير مما يمكن أن تتخيله الآن. ثم برمجتك جميع قواعد المجتمع لتفكر وتحسب نفسك من خلال الحياة بطريقة مفيدة ولا تزعج أي شخص آخر. التوافق مع هذه القاعدة جعلك مناسبًا ، ولكنه جردك أيضًا من إبداعك الطفولي غير المحدود وخيالك وشهوة الاستكشاف.",
      ourmissiontext2: " الآن ، أكثر ما يحتاجه العالم ، هو الأشخاص الذين يجدون هذا الإصدار من أنفسهم مرة أخرى. الناس الذين يأتون على قيد الحياة مرة أخرى. الناس الذين يتساءلون ، يمكن أن يندهشوا ويشعروا بسعادة غامرة كما كانوا عندما كانوا صغارًا. نعيد لك الحياة مرة أخرى ، وتذكيرك بنسخة من نفسك يمكنها أن تفعل أي شيء ، هذه هي مهمتناز",
      artists: "الفنانين",
      artisttext: " وراء كل عمل فني نبيعه ، هناك أفكار ورؤى وفنانين رائعين وقصص رائعة. في هذه الصفحة نسلط الضوء على بعض من ذلك. إذا كنت تريد معرفة المزيد عن عمل فني أنت على وشك شرائه ، ولكن الفنان ليس مدرجًا في هذه الصفحة ، فانقر على اسمه أثناء التسوق وسيتم إعادة توجيهك مباشرةً إلى أهم حساب على وسائل التواصل الاجتماعي أو موقع الويب الخاص به.",
      cart: "أضف إلي سلة الشراء",
      customerreviews: "أراء العملاء",
      review: "رأي",
      writereview: "أكتب رايك",
      score: "تقيمك",
      share: "مشاركة",
      checkreview: "هل كانت هذه المراجعة مفيدة",
      signup: "قم بالتسجيل للحصول على إشعار بالبريد الإلكتروني عند إصدار أعمال فنية محدودة جديدة.",
      Newsletter: " النشرة الإخبارية",
      SUBSCRIBE: "انضم الينا",
      others: "اﻷخرين",
      company: "الشركه",
      Limitworks: "أعمال محدودة",
      name: "إسمك",
      email: "إيميلك",
      phone: "رقم تليفونك",
      submit: "إرسال",
      // productslider
      size: "الحجم",
      productDetails: " تفاصيل المنتج",
      shipping: "الشحن",
      left: "المتبقى",
      imgdetails: "تفاصيل المنتج",
      limitedEdition: "الطبعات المحدودة",
      DescriptionEdition: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit minima nemo corporis eligendi voluptas quidem eius suscipit dignissimos recusandae soluta alias, provident ipsum officia, tempore laboriosam neque esse cupiditate!",
      // cart translation
      checkout: "شراء الان",
      total: "الحساب الإجمالى",
      remove: "حذف",
      cartname: "السلة",
      // footer
      logo: "نقش",
      lorem: "نص تجريبى "
    }, _defineProperty(_message2, "email", "البريد الإلكترونى"), _defineProperty(_message2, "firstname", "الاسم الأول "), _defineProperty(_message2, "lastname", "الاسم الأخير"), _defineProperty(_message2, "address", "العنوان"), _defineProperty(_message2, "appartment", "طاقم العمل "), _defineProperty(_message2, "city", "المدينه"), _defineProperty(_message2, "phone", "رقم الموبايل"), _defineProperty(_message2, "postcode", "الرمز البريدى"), _defineProperty(_message2, "discount", "الخصم"), _defineProperty(_message2, "Aplly", "الحصول"), _defineProperty(_message2, "subtotal", "الخصم"), _defineProperty(_message2, "total", "السعر الإجمالى"), _defineProperty(_message2, "calulated", "الحساب سيتم الكرة القادة "), _defineProperty(_message2, "toshipping", "متابعة الشراء"), _defineProperty(_message2, "select_size", "من فضلك اختر الحجم"), _defineProperty(_message2, "showorder", " إظهار ملخص الطلب"), _defineProperty(_message2, "hideorder", " إخفاء ملخص الطلب"), _defineProperty(_message2, "empty", "      "), _defineProperty(_message2, "addressfooter", "Naqsh BV. Westplein 123016BM RotterdamThe Netherlands"), _defineProperty(_message2, "shopfooter", "تسوق الأعمال الفنية"), _defineProperty(_message2, "aboutfooter", "حول منتجاتنا"), _defineProperty(_message2, "carreerfooter", "وظائف"), _defineProperty(_message2, "aboutusfooter", "معلومات عنا"), _defineProperty(_message2, "artistfooter", "الفنانون"), _defineProperty(_message2, "contactfooter", "اتصل بنا"), _defineProperty(_message2, "termsfooter", "شروط الاستخدام"), _defineProperty(_message2, "privacyfooter", "سياسة خاصة"), _defineProperty(_message2, "refundpolicy", "سياسة الاسترجاع"), _defineProperty(_message2, "socialLink", "رابط التواصل اﻷجتماعي"), _defineProperty(_message2, "solidout", "نفذت الكميه"), _defineProperty(_message2, "support", "تواصل معنا"), _defineProperty(_message2, "support_text", " هل لديك اسئلة؟ ألق نظرة على الفئات أدناه ، وإذا كانت لا تتضمن الإجابة التي كنت تبحث عنها ، فلا تتردد في إرسال بريد إلكتروني إلينا."), _defineProperty(_message2, "Product", "المنتج"), _defineProperty(_message2, "Shipping", "الشحن"), _defineProperty(_message2, "Collabs", "تعاون"), _defineProperty(_message2, "contact", "اتصل بنا"), _defineProperty(_message2, "product_text1", " ؟ Walltones ما هو"), _defineProperty(_message2, "product_text2", "؟ Knitworks ما هو"), _defineProperty(_message2, "product_text3", "كيف اقوم بتجميع نغمه walltone الخاصه بي ؟"), _defineProperty(_message2, "product_text4", "  كيف أقوم بتجميع Knitwork الخاص بي؟"), _defineProperty(_message2, "product_text5", "ما هي الأبعاد / المواد الدقيقة لأعمالي الفنية؟"), _defineProperty(_message2, "product_text6", "أحتاج إلى أي أدوات لتعليق أعمالي الفنية؟"), _defineProperty(_message2, "product_text7", "Walltones هي ملصقاتنا بأسعار معقولة وسهلة التعليق. تأتي في ثلاثة أحجام مختلفة ، كاملة دائمًا بإطار مغناطيسي خاص. كل Walltone جزء من إصدار محدود."), _defineProperty(_message2, "product_text8", " أعمال التريكو هي أعمال فنية فاخرة على القماش ، غالبًا ما تستخدم مزيجًا من تقنيات الطباعة والطلاء. تمدد القماش في إطار معدني قوي. مثل Walltones ، فهي دائمًا جزء من إصدار محدود."), _defineProperty(_message2, "product_text9", " قم بمحاذاة أزواج الإطارات المغناطيسية مع الجزء العلوي والسفلي من عملك الفني. يمكن استخدام الشرائط اللاصقة أو اللولب المتضمن في لصق الإطار العلوي فقط ، أو كلا الإطارين على الحائط."), _defineProperty(_message2, "product_text10", " يمكنك العثور على تعليمات تجميع Knitwork في الدليل الموجود داخل الصندوق."), _defineProperty(_message2, "product_text11", " عند شراء عمل فني ، يمكنك العثور على المواصفات في القوائم المنسدلة أسفل وصف المنتج. إذا كانت لديك أية أسئلة لم تتم الإجابة عليها ، فلا تتردد في طرحها علينا."), _defineProperty(_message2, "product_text12", " إذا كانت الشرائط اللاصقة المرفقة غير مناسبة لجدارك ، يمكنك استخدام المسمار والمكونات المدرجة. ستحتاج إلى مثقاب ومفك فقط عند استخدام المسمار والمقبس."), _defineProperty(_message2, "ship_text1", "هل تشحن إلى بلدي؟"), _defineProperty(_message2, "ship_text2", "ماذا عن المرتجعات ووقت الشحن؟"), _defineProperty(_message2, "ship_text3", " نحن نشحن عالميا. إذا كنت قلقًا من أن بلدك قد لا يقبل منتجاتنا لأن التنظيم أو السياسات الجمركية ، يرجى إرسال بريد إلكتروني إلينا لشرح الوضع وسنقوم بذلك حاول معرفة الحل الأفضل."), _defineProperty(_message2, "ship_text4", " بعد وضع طلبك ، تتم عملية التحضير والتعبئة والشحن بأكملها إلى باب منزلك يمكن أن يستغرق ما يقرب من 15 يوم عمل حسب موقعك. يتم إرسال الطلبات في غضون 24 ساعة في المتوسط ​​، وبعد ذلك لن تتمكن من الإلغاء نظامنا لأن الحزمة ستكون بالفعل في العبور. ومع ذلك ، يمكنك إرجاع حزمة لاسترداد كامل في غضون 30 يوما."), _defineProperty(_message2, "Collabs_text1", "أنا فنان ، كيف يمكننا العمل معًا؟ "), _defineProperty(_message2, "Collabs_text2", "أنا مؤثر ، كيف يمكننا العمل معًا؟"), _defineProperty(_message2, "Collabs_text3", " ممتاز! يرجى إرسال بريد إلكتروني إلينا مع رابط لمحفظتك ، إنستجرام ، أو أي وسائط أخرى تريد منا مراجعتها. سنكون سعداء لإلقاء نظرة."), _defineProperty(_message2, "Collabs_text4", " نحن لا نعمل مع الكثير من المؤثرين ، ولكن إذا تواصلت مع جمهور التي تعتقد أنها ستحب علامتنا التجارية ، نحن منفتحون جدًا للحديث عنها. يرجى مراسلتنا عبر البريد الإلكتروني!"), _defineProperty(_message2, "Terms", "الشروط"), _defineProperty(_message2, "Terms_text1", "ما هي شروط الموقع"), _defineProperty(_message2, "Terms_text2", "كيف تتعامل مع خصوصيتك"), _defineProperty(_message2, "Terms_text3", "كيف يمكنني استرداد اﻷموال"), _defineProperty(_message2, "Terms_text4", "اقرأ شروط الموقع"), _defineProperty(_message2, "Terms_text5", "اقرأ سياسة الخصوصية"), _defineProperty(_message2, "Terms_text6", "اقرأ سياسة اﻷسترداد"), _defineProperty(_message2, "noitem", "!! لا يوجد منتجات. الرجاء إضافة منتج لإكمال العملية"), _defineProperty(_message2, "Print_material", "خامات الطباعة"), _defineProperty(_message2, "Print_ink", "حبر الطباعة"), _defineProperty(_message2, "Print_finish", "اللمسة النهائية للطباعة"), _defineProperty(_message2, "Frame_material", "معدن الاطار"), _defineProperty(_message2, "Frame_finish", "اللمسة النهائية للاطار"), _message2)
  }
};
var i18n = new _vueI18n["default"]({
  locale: "en",
  messages: messages
});
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

_vue["default"].component("AppHome", require("./components/AppHome.vue")["default"]);

var app = new _vue["default"]({
  el: "#app",
  router: _router["default"],
  store: _store["default"],
  i18n: i18n,
  vuetify: new _vuetify["default"]()
});