const mcqData = [
  // ===== OVERFLOW =====
  {
    q: "ما القيمة الافتراضية لخاصية overflow؟",
    opts: ["hidden", "scroll", "visible", "auto"],
    ans: 2
  },
  {
    q: "ما القيمة التي تُخفي المحتوى الزايد عن حجم العنصر تمامًا؟",
    opts: ["visible", "auto", "scroll", "hidden"],
    ans: 3
  },
  {
    q: "ما الفرق بين overflow: scroll وoverflow: auto؟",
    opts: [
      "لا فرق بينهما",
      "scroll تضيف شريط تمرير دائماً، auto تضيفه فقط لو فيه محتوى زايد",
      "auto تضيف شريط تمرير دائماً، scroll تضيفه فقط لو فيه محتوى زايد",
      "scroll للأفقي فقط، auto للعمودي فقط"
    ],
    ans: 1
  },
  {
    q: "أي قيمة تجعل المحتوى الزايد يظهر خارج حدود العنصر؟",
    opts: ["hidden", "scroll", "auto", "visible"],
    ans: 3
  },
  {
    q: "عندك صندوق عرضه 200px وارتفاعه 100px والنص أطول منه. أي قيمة تضيف scroll bar فقط لو فيه محتوى زيادة؟",
    opts: ["overflow: hidden", "overflow: scroll", "overflow: auto", "overflow: visible"],
    ans: 2
  },

  // ===== VISIBILITY =====
  {
    q: "ما القيمة الافتراضية لخاصية visibility؟",
    opts: ["hidden", "none", "visible", "block"],
    ans: 2
  },
  {
    q: "ما الفرق الأساسي بين visibility: hidden وdisplay: none؟",
    opts: [
      "لا فرق بينهما تماماً",
      "visibility: hidden تخفي العنصر وتحتفظ بمكانه، display: none تخفيه وتحذف مكانه",
      "display: none تخفي العنصر وتحتفظ بمكانه، visibility: hidden تخفيه وتحذف مكانه",
      "visibility: hidden تحذف العنصر من الكود"
    ],
    ans: 1
  },
  {
    q: "لو كتبنا visibility: hidden على عنصر، ماذا يحدث للمساحة التي كان يشغلها؟",
    opts: [
      "تُحذف المساحة تماماً",
      "تُحذف المساحة من العمود فقط",
      "تفضل المساحة فارغة محجوزة",
      "تنتقل للعنصر التالي"
    ],
    ans: 2
  },

  // ===== Z-INDEX =====
  {
    q: "ما وظيفة خاصية z-index؟",
    opts: [
      "تحديد حجم الخط",
      "التحكم في ترتيب الطبقات (أي عنصر يكون فوق)",
      "تحديد عرض العنصر",
      "إخفاء العنصر"
    ],
    ans: 1
  },
  {
    q: "عندك عنصران، الأول z-index: 1 والثاني z-index: 5. أيهما سيظهر فوق الآخر؟",
    opts: ["الأول", "الثاني لأن رقمه أكبر", "يتساويان", "يعتمد على position فقط"],
    ans: 1
  },
  {
    q: "ما الشرط الأساسي لكي تعمل خاصية z-index؟",
    opts: [
      "يجب أن يكون العنصر display: block",
      "يجب أن يكون للعنصر position غير static",
      "يجب أن يكون العنصر داخل div",
      "لا توجد شروط"
    ],
    ans: 1
  },
  {
    q: "هل يمكن أن تكون قيمة z-index سالبة؟",
    opts: ["لا، يجب أن تكون موجبة دائماً", "نعم، القيم ممكن تكون موجبة وسالبة", "فقط الصفر والأرقام الموجبة", "فقط بين 0 و100"],
    ans: 1
  },

  // ===== OPACITY =====
  {
    q: "ما قيمة opacity للعنصر الشفاف تماماً (غير مرئي)؟",
    opts: ["1", "0.5", "100", "0"],
    ans: 3
  },
  {
    q: "ما قيمة opacity للعنصر الواضح بالكامل (بدون شفافية)؟",
    opts: ["0", "0.5", "1", "100"],
    ans: 2
  },
  {
    q: "ما تأثير opacity: 0.7 على صورة؟",
    opts: [
      "الصورة تختفي تماماً",
      "الصورة تبقى واضحة بالكامل",
      "الصورة تبقى بوضوح 70% (باهتة شوية)",
      "الصورة تتحرك"
    ],
    ans: 2
  },
  {
    q: "ما التأثير الصحيح لكود: img:hover { opacity: 1; } على صورة كانت opacity: 0.5؟",
    opts: [
      "الصورة تختفي عند الـ hover",
      "الصورة تصبح واضحة بالكامل عند تحريك الماوس عليها",
      "الصورة تتغير ألوانها",
      "الصورة تكبر"
    ],
    ans: 1
  },

  // ===== DISPLAY =====
  {
    q: "أي خاصية display تجعل العنصر يأخذ سطراً كاملاً لوحده؟",
    opts: ["inline", "inline-block", "none", "block"],
    ans: 3
  },
  {
    q: "أيٌّ من العناصر التالية display: block افتراضياً؟",
    opts: ["<span>", "<a>", "<strong>", "<div>"],
    ans: 3
  },
  {
    q: "ما القيمة التي تجعل العنصر يظهر في نفس السطر لكن لا يقبل تحديد width وheight؟",
    opts: ["block", "inline-block", "inline", "flex"],
    ans: 2
  },
  {
    q: "ما ميزة display: inline-block مقارنةً بـ inline؟",
    opts: [
      "يأخذ سطراً كاملاً",
      "يظهر في نفس السطر ويقبل تحديد width وheight",
      "يخفي العنصر",
      "لا فرق بينهما"
    ],
    ans: 1
  },
  {
    q: "أيٌّ من العناصر التالية display: inline افتراضياً؟",
    opts: ["<div>", "<p>", "<span>", "<section>"],
    ans: 2
  },
  {
    q: "ما الفرق بين display: none وvisibility: hidden؟",
    opts: [
      "لا فرق",
      "display: none يحذف العنصر ومكانه، visibility: hidden يخفيه ويحتفظ بمكانه",
      "visibility: hidden يحذف العنصر ومكانه",
      "display: none يحتفظ بمكان العنصر"
    ],
    ans: 2
  },

  // ===== POSITION =====
  {
    q: "ما القيمة الافتراضية لخاصية position؟",
    opts: ["relative", "absolute", "fixed", "static"],
    ans: 3
  },
  {
    q: "أي قيمة position تجعل العنصر يتحرك نسبياً لمكانه الأصلي؟",
    opts: ["static", "fixed", "relative", "absolute"],
    ans: 2
  },
  {
    q: "أي قيمة position تجعل العنصر يظل ثابتاً على الشاشة حتى عند التمرير (Scroll)؟",
    opts: ["static", "relative", "absolute", "fixed"],
    ans: 3
  },
  {
    q: "أي قيمة position تجمع بين relative وfixed؟ (يكون نسبياً في البداية ثم يثبت عند Scroll)",
    opts: ["absolute", "sticky", "static", "block"],
    ans: 1
  },
  {
    q: "عندك عنصر position: absolute. بالنسبة لأي شيء سيتحرك لو لم يكن له أب بـ position غير static؟",
    opts: ["بالنسبة لأقرب أخ له", "بالنسبة لنفسه", "بالنسبة لكامل الصفحة", "لن يتحرك أصلاً"],
    ans: 2
  },

  // ===== FLOAT & CLEAR =====
  {
    q: "ما وظيفة خاصية float؟",
    opts: [
      "إخفاء العنصر",
      "تحريك العنصر ناحية اليمين أو اليسار داخل الحاوية والنص يلتف حوله",
      "تثبيت العنصر في الشاشة",
      "تكبير العنصر"
    ],
    ans: 1
  },
  {
    q: "ما وظيفة clear: both؟",
    opts: [
      "تضيف float لكل العناصر",
      "تمنع العنصر من الظهور بجانب أي عنصر عائم (float) وتنزله تحتها",
      "تمسح محتوى العنصر",
      "تخفي العنصر"
    ],
    ans: 1
  }
];

const essayData = [
  {
    q: "اشرح خاصية overflow في CSS، مع ذكر قيمها الأربعة الأساسية ومثال لكل قيمة.",
    marks: 10
  },
  {
    q: "ما الفرق بين visibility: hidden وdisplay: none؟ أعطِ مثالاً عملياً يوضح متى تستخدم كلاً منهما.",
    marks: 10
  },
  {
    q: "اشرح خاصية z-index وما الشرط الأساسي لكي تعمل؟ اكتب مثالاً بعنصرين أحدهما فوق الآخر.",
    marks: 10
  },
  {
    q: "اشرح خاصية opacity مع ذكر نطاق قيمها. كيف تستخدمها مع :hover لعمل تأثير تفاعلي على صورة؟",
    marks: 10
  },
  {
    q: "اشرح الفرق بين display: block وdisplay: inline وdisplay: inline-block مع مثال لكل منها وأمثلة على عناصر HTML تستخدم كل نوع افتراضياً.",
    marks: 15
  },
  {
    q: "اشرح قيم خاصية position الخمسة (static, relative, absolute, fixed, sticky) مع ذكر حالة استخدام مناسبة لكل قيمة.",
    marks: 15
  },
  {
    q: "ما الفرق بين position: relative وposition: absolute؟ وكيف يتحرك absolute بالنسبة لعنصر أبيه؟ اكتب كوداً توضيحياً.",
    marks: 10
  },
  {
    q: "متى تستخدم position: sticky؟ اكتب مثالاً يوضح تثبيت الـ header أعلى الصفحة أثناء التمرير.",
    marks: 10
  },
  {
    q: "اشرح خاصية float وخاصية clear مع مثال يوضح صورة تطفو على اليسار ونص يلتف حولها ثم عنصر يستخدم clear لإنهاء العوم.",
    marks: 10
  },
  {
    q: "اكتب ملخصاً مقارناً بين: overflow, visibility, z-index, opacity, display, position — وظيفة كل خاصية وأهم قيمها.",
    marks: 10
  }
];
