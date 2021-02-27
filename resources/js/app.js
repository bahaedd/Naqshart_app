/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import Vue from "vue";
import VueInternationalization from "vue-i18n";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import VueAwesomeSwiper from "vue-awesome-swiper";

// // import style
// import 'swiper/css/swiper.css'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import router from "./Router/router.js";
import store from "./store";

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.use(VueInternationalization);
const lang = localStorage.getItem("locale") || "en";
const messages = {
    en: {
        message: {
            home: "Home",
            loading: "Loading",
            shopart: "Shop Art",
            about: "About",
            introducing: "INTRODUCING",
            fineart: "Fine Art",
            shoppers: "Visitors",
            live: "LIVE",
            shopnow: "Shop Now",
            newrelease: "New Release",
            newreleaseheader: "THE NEW RELEASE OF LIMITED ARTWORKS",
            readmore: "Read More ",
            readless: "Read Less",
            ourmission: "مهمتنا",
            ourmissiontext1:
                "You, like everyone else on this planet, were born a creative person with good intentions. Able to change the world in ways so much bigger than you probably can imagine right now. All the rules of society then programmed you to think and calculate yourself through life in a way that is useful and not disturbing anyone else. Conforming to this norm made you fit in, but also stripped you of your boundless childlike creativity, imagination and lust for exploration.",
            ourmissiontext2:
                "Right now, what the world needs most, is people who find that version of themselves back again. People who come alive again. People who wonder, can be amazed and feel ecstatic like they did when they were little kids. Bringing you alive again, and reminding you of the version of yourself that can do anything, that is our mission. ",
            artists: "Artists",
            artisttext:
                "Behind every artwork we sell, there are ideas, visions, amazing artists and great stories. On this page we highlight some of that. If you want to learn more about an artwork you are about to buy, but the artist is not listed on this page, click on their name during shopping and you will get redirected straight to their most important social media account or website.",
            cart: "Add to cart",
            customerreviews: "Customer Reviews",
            review: "Review",
            writereview: "Write Review",
            score: "Score",
            share: "Share",
            checkreview: "Was This Review Helpful",
            signup:
                "Sign up for a notification email when new limited artworks are released.",
            Newsletter:
                'If you have art within you, we would like you to join "Naqsh" family!',
            SUBSCRIBE: "Join Us",
            others: "Help",
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
            lorem: "lorem text",
            // Payment
            email: "E-mail",
            firstname: "First Name",
            lastname: "Last Name",
            address: "Address",
            appartment: "Apartment, Suite, etc. (optional)",
            city: "City",
            phone: "Phone",
            postcode: "Post Code ",
            discount: "Discount",
            Aplly: "APPLY",
            subtotal: "Sub Total",
            total: "Total",
            calulated: "Calculated at next",
            toshipping: "Continue to Shipping",
            select_size: "Please Select Size",
            showorder: "Show Order Summary",
            hideorder: "Hide Order Summary",
            empty: "      ",
            // Start Footer
            addressfooter: "Riyadh, Saudia Arabia",
            shopfooter: "Shop artworks",
            aboutfooter: "About our products",
            carreerfooter: "Careers",
            aboutusfooter: "Our Mission",
            artistfooter: "Artists",
            contactfooter: "Contact us",
            termsfooter: "Terms of use",
            privacyfooter: "Privacy Policy",
            refundpolicy: "Refund Policy",
            socialLink: "SocialLink",
            solidout: "SOLD OUT",
            support: "Contact Us",
            support_text:
                "Do you have any questions? Have a look at the categories below, and if these dont include the answer you were looking for, please feel free to shoot us an email.",
            Product: "Product",
            Shipping: "Shipping",
            Collabs: "Collabs",
            contact: "Contact",
            product_text1: "What are Walltones?",
            product_text2: "What are Knitworks?",
            product_text3: "How do I assemble my Walltone?",
            product_text4: "How do I assemble my Knitwork?",
            product_text5:
                "What are the exact dimensions/materials of my artwork?",
            product_text6: "I need any tools to hang my artwork?",
            product_text7:
                "Walltones are our affordable and easy to hang canvas posters. They come in three different sizes, always complete with a special magnetic frame. Each Walltone is part of a limited edition.",
            product_text8:
                "Knitworks are luxurious artworks on fabric, often using a combination of printing and painting techniques. The fabric is stretchedinto a sturdy metal frame. Like Walltones, they are always part of a limited edition.",
            product_text9:
                "Align the pairs of magnetic frames with the top and bottom of your artwork.The included adhesive strips or screw can be used to stick only the top frame, or both frames to your wall.",
            product_text10:
                "You can find Knitwork assembly instructions on the manual inside the box.",
            product_text11:
                "When you buy an artwork, you can find the specifications in the dropdown menus underneath the product description. If you have any questions not answered in there, feel free to ask us.",
            product_text12:
                "If the included adhesive strips are not suitable for your wall,you can use the included screw and plug. Only when using the screw and plug you will need a drill and screwdriver.",
            ship_text1: "Do you ship to my country?",
            ship_text2: "What about returns and shipping time?",
            ship_text3:
                "We ship worldwide. If you are worried that your country might not accept our products because of regulation or customs policies, please send us an email explaining the situation and we will try to find out what is the best solution.",
            ship_text4:
                "After placing your order, the whole process of preparing, packing and shipping to your doorstep can take approximately 15 business days depending on your location. Orders get sent out within 24 hours on average, after which you wont be able to cancel our order since the package will already be in transit. You can however, return your package for a full refund within 30 days.",
            Collabs_text1: "I am an artist, how can we work together?",
            Collabs_text2: "I am an influencer, how can we work together?",
            Collabs_text3:
                "Awesome! Please send us an email with a link to your portfolio, instagram,or any other media you want us to review. We will be happy to take a look.",
            Collabs_text4:
                "We dont work with a lot of influencers, but if you connect with an audience that you think would love our brand, we are very open to talk about it. Please shoot us an email!",
            Terms: "Terms",
            Terms_text1: "What are the terms of this website?",
            Terms_text2: "How do you treat my privacy?",
            Terms_text3: "How can I get a refund?",
            Terms_text4: "Read our terms",
            Terms_text5: "Read our Privacy Policy",
            Terms_text6: "Read our Refund Policy",
            noitem:
                "There are no products. Please add an entry to complete the process!!",
            Print_material: "Print material:",
            Print_ink: "Print ink:",
            Print_finish: "Print finish:",
            Frame_material: "Frame material:",
            Frame_finish: "Frame finish:"
        },
        currency: {
            sar: "SAR",
            usd: "USD",
            usd1: "USD"
        },
        navbar: {
            terms: "terms of use",
            privacy: "privacy policy",
            refund: "refund policy"
        }
    },
    ar: {
        message: {
            home: "الصفحه الرئيسيه",
            loading: "يرجى الانتظار",
            shopart: "متجر الفن",
            about: "من نحن",
            introducing: "مقدمه",
            fineart: "فن راقي",
            shoppers: "زائر",
            live: "مباشر",
            shopnow: "اشتري اﻷن",
            newrelease: "إصدار جديد",
            newreleaseheader: "الإصدار الجديد من الأعمال الفنية المحدودة",
            readless: "إقرأ أقل",
            readmore: "إقرأ أكثر",
            ourmission: "مهمتنا",
            ourmissiontext1:
                " أنت ، مثل أي شخص آخر على هذا الكوكب ، ولدت شخصًا مبدعًا بحسن نية. قادرة على تغيير العالم بطرق أكبر بكثير مما يمكن أن تتخيله الآن. ثم برمجتك جميع قواعد المجتمع لتفكر وتحسب نفسك من خلال الحياة بطريقة مفيدة ولا تزعج أي شخص آخر. التوافق مع هذه القاعدة جعلك مناسبًا ، ولكنه جردك أيضًا من إبداعك الطفولي غير المحدود وخيالك وشهوة الاستكشاف.",
            ourmissiontext2:
                " الآن ، أكثر ما يحتاجه العالم ، هو الأشخاص الذين يجدون هذا الإصدار من أنفسهم مرة أخرى. الناس الذين يأتون على قيد الحياة مرة أخرى. الناس الذين يتساءلون ، يمكن أن يندهشوا ويشعروا بسعادة غامرة كما كانوا عندما كانوا صغارًا. نعيد لك الحياة مرة أخرى ، وتذكيرك بنسخة من نفسك يمكنها أن تفعل أي شيء ، هذه هي مهمتناز",
            artists: "الفنانين",
            artisttext:
                " وراء كل عمل فني نبيعه ، هناك أفكار ورؤى وفنانين رائعين وقصص رائعة. في هذه الصفحة نسلط الضوء على بعض من ذلك. إذا كنت تريد معرفة المزيد عن عمل فني أنت على وشك شرائه ، ولكن الفنان ليس مدرجًا في هذه الصفحة ، فانقر على اسمه أثناء التسوق وسيتم إعادة توجيهك مباشرةً إلى أهم حساب على وسائل التواصل الاجتماعي أو موقع الويب الخاص به.",
            cart: "أضف إلي سلة الشراء",
            customerreviews: "أراء العملاء",
            review: "رأي",
            writereview: "أكتب رايك",
            score: "تقيمك",
            share: "مشاركة",
            checkreview: "هل كانت هذه المراجعة مفيدة",
            signup:
                "قم بالتسجيل للحصول على إشعار بالبريد الإلكتروني عند إصدار أعمال فنية محدودة جديدة.",
            Newsletter:
                "اذا كان لديك فن بداخلك ، فيسعدنا انضمامك لعائلة “نقش” !",
            SUBSCRIBE: "انضم الينا",
            others: "الاحكام العامة",
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
            DescriptionEdition:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae fugit minima nemo corporis eligendi voluptas quidem eius suscipit dignissimos recusandae soluta alias, provident ipsum officia, tempore laboriosam neque esse cupiditate!",
            // cart translation
            checkout: "شراء الان",
            total: "الحساب الإجمالى",
            remove: "حذف",
            cartname: "السلة",
            // footer
            logo: "نقش",
            lorem: "نص تجريبى ",
            // Payment
            email: "البريد الإلكترونى",
            firstname: "الاسم الأول ",
            lastname: "الاسم الأخير",
            address: "العنوان",
            appartment: "طاقم العمل ",
            city: "المدينه",
            phone: "رقم الموبايل",
            postcode: "الرمز البريدى",
            discount: "الخصم",
            Aplly: "الحصول",
            subtotal: "الخصم",
            total: "السعر الإجمالى",
            calulated: "الحساب سيتم الكرة القادة ",
            toshipping: "متابعة الشراء",
            select_size: "من فضلك اختر الحجم",
            showorder: " إظهار ملخص الطلب",
            hideorder: " إخفاء ملخص الطلب",
            empty: "      ",
            //  Start Footer
            addressfooter: "الرياض ،المملكة العربية السعودية",
            shopfooter: "تسوق الأعمال الفنية",
            aboutfooter: "حول منتجاتنا",
            carreerfooter: "وظائف",
            aboutusfooter: "عنا",
            artistfooter: "الفنانون",
            contactfooter: "اتصل بنا",
            termsfooter: "شروط الاستخدام",
            privacyfooter: "سياسة الخصوصية",
            refundpolicy: "سياسة الاسترجاع",
            socialLink: "رابط التواصل اﻷجتماعي",
            solidout: "نفذت الكميه",
            support: "تواصل معنا",
            support_text:
                " هل لديك اسئلة؟ ألق نظرة على الفئات أدناه ، وإذا كانت لا تتضمن الإجابة التي كنت تبحث عنها ، فلا تتردد في إرسال بريد إلكتروني إلينا.",
            Product: "المنتج",
            Shipping: "الشحن",
            Collabs: "تعاون",
            contact: "اتصل بنا",
            product_text1: " ؟ Walltones ما هو",
            product_text2: "؟ Knitworks ما هو",
            product_text3: "كيف اقوم بتجميع نغمه walltone الخاصه بي ؟",
            product_text4: "  كيف أقوم بتجميع Knitwork الخاص بي؟",
            product_text5: "ما هي الأبعاد / المواد الدقيقة لأعمالي الفنية؟",
            product_text6: "أحتاج إلى أي أدوات لتعليق أعمالي الفنية؟",
            product_text7:
                "Walltones هي ملصقاتنا بأسعار معقولة وسهلة التعليق. تأتي في ثلاثة أحجام مختلفة ، كاملة دائمًا بإطار مغناطيسي خاص. كل Walltone جزء من إصدار محدود.",
            product_text8:
                " أعمال التريكو هي أعمال فنية فاخرة على القماش ، غالبًا ما تستخدم مزيجًا من تقنيات الطباعة والطلاء. تمدد القماش في إطار معدني قوي. مثل Walltones ، فهي دائمًا جزء من إصدار محدود.",
            product_text9:
                " قم بمحاذاة أزواج الإطارات المغناطيسية مع الجزء العلوي والسفلي من عملك الفني. يمكن استخدام الشرائط اللاصقة أو اللولب المتضمن في لصق الإطار العلوي فقط ، أو كلا الإطارين على الحائط.",
            product_text10:
                " يمكنك العثور على تعليمات تجميع Knitwork في الدليل الموجود داخل الصندوق.",
            product_text11:
                " عند شراء عمل فني ، يمكنك العثور على المواصفات في القوائم المنسدلة أسفل وصف المنتج. إذا كانت لديك أية أسئلة لم تتم الإجابة عليها ، فلا تتردد في طرحها علينا.",
            product_text12:
                " إذا كانت الشرائط اللاصقة المرفقة غير مناسبة لجدارك ، يمكنك استخدام المسمار والمكونات المدرجة. ستحتاج إلى مثقاب ومفك فقط عند استخدام المسمار والمقبس.",
            ship_text1: "هل تشحن إلى بلدي؟",
            ship_text2: "ماذا عن المرتجعات ووقت الشحن؟",
            ship_text3:
                " نحن نشحن عالميا. إذا كنت قلقًا من أن بلدك قد لا يقبل منتجاتنا لأن التنظيم أو السياسات الجمركية ، يرجى إرسال بريد إلكتروني إلينا لشرح الوضع وسنقوم بذلك حاول معرفة الحل الأفضل.",
            ship_text4:
                " بعد وضع طلبك ، تتم عملية التحضير والتعبئة والشحن بأكملها إلى باب منزلك يمكن أن يستغرق ما يقرب من 15 يوم عمل حسب موقعك. يتم إرسال الطلبات في غضون 24 ساعة في المتوسط ​​، وبعد ذلك لن تتمكن من الإلغاء نظامنا لأن الحزمة ستكون بالفعل في العبور. ومع ذلك ، يمكنك إرجاع حزمة لاسترداد كامل في غضون 30 يوما.",
            Collabs_text1: "أنا فنان ، كيف يمكننا العمل معًا؟ ",
            Collabs_text2: "أنا مؤثر ، كيف يمكننا العمل معًا؟",
            Collabs_text3:
                " ممتاز! يرجى إرسال بريد إلكتروني إلينا مع رابط لمحفظتك ، إنستجرام ، أو أي وسائط أخرى تريد منا مراجعتها. سنكون سعداء لإلقاء نظرة.",
            Collabs_text4:
                " نحن لا نعمل مع الكثير من المؤثرين ، ولكن إذا تواصلت مع جمهور التي تعتقد أنها ستحب علامتنا التجارية ، نحن منفتحون جدًا للحديث عنها. يرجى مراسلتنا عبر البريد الإلكتروني!",
            Terms: "الشروط",
            Terms_text1: "ما هي شروط الموقع",
            Terms_text2: "كيف تتعامل مع خصوصيتك",
            Terms_text3: "كيف يمكنني استرداد اﻷموال",
            Terms_text4: "اقرأ شروط الموقع",
            Terms_text5: "اقرأ سياسة الخصوصية",
            Terms_text6: "اقرأ سياسة اﻷسترداد",
            noitem: "!! لا يوجد منتجات. الرجاء إضافة منتج لإكمال العملية",
            Print_material: "خامات الطباعة",
            Print_ink: "حبر الطباعة",
            Print_finish: "اللمسة النهائية للطباعة",
            Frame_material: "معدن الاطار",
            Frame_finish: "اللمسة النهائية للاطار"
        },
        currency: {
            sar: "SAR",
            usd: "USD",
            usd1: "USD"
        },
        navbar: {
            terms: "سياسة الاستخدام",
            privacy: "سياسة الخصوصية",
            refund: "سياسة الاسترجاع"
        }
    }
};
const i18n = new VueInternationalization({
    locale: "en",
    messages
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

Vue.component("AppHome", require("./components/AppHome.vue").default);

const app = new Vue({
    el: "#app",
    router,
    store,
    i18n,
    vuetify: new Vuetify()
});
