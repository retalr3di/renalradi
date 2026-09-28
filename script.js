const teachers = [
    {
        name: "فايزة العجوري",
        message: "شكراً لكِ على قيادتكِ واهتمامكِ الدائم بنا، وعلى كل جهد تبذلينه لتجعلي مدرستنا مكاناً أجمل. لكِ منا كل الاحترام والتقدير. 🌷"
    },
    {
        name: "أمل الغنانيم",
        message: "شكراً لكِ على عطائكِ ووقوفكِ الدائم إلى جانبنا، وعلى كل كلمة طيبة وتشجيع جميل قدمتِه لنا. 🤍"
    },
    {
        name: "سمر الغنانيم",
        message: "شكراً لكِ على كل ما تقدمينه لنا، وعلى اهتمامكِ وحرصكِ الدائم على أن ننجح ونحقق أحلامنا. ✨"
    },
    {
        name: "ناريمان الحجاحجة",
        message: "شكراً لكِ على الحنان والصبر والابتسامة التي تجعل بداية رحلة التعليم أجمل. لكِ مكان جميل في قلوبنا. 🌸"
    },
    {
        name: "نوال النعيمات",
        message: "شكراً لكِ على كل كلمة علمتِنا إياها، وكل لحظة صبر واهتمام منحتِنا إياها. أثركِ سيبقى معنا دائماً. 💗"
    },
    {
        name: "مريم النعيمات",
        message: "شكراً لكِ لأنكِ جعلتِ أيام المدرسة أجمل، وتركتِ في قلوبنا ذكريات لا تُنسى. 🌷"
    },
    {
        name: "وجدان النعيمات",
        message: "شكراً لكِ على عطائكِ وصبركِ واهتمامكِ بنا. كل ما زرعتِه فينا سيكبر معنا يوماً بعد يوم. 🤍"
    },
    {
        name: "كفى العرايضة",
        message: "شكراً لكِ على صبركِ وتشجيعكِ وكل لحظة جعلتِ فيها التعلم أسهل وأجمل. 🌸"
    },
    {
        name: "ميسون الغنانيم",
        message: "لكِ كل الشكر على تعبكِ واهتمامكِ بنا، وعلى كل أثر جميل تركتِه في نفوسنا. 💕"
    },
    {
        name: "عرين",
        message: "شكراً لكِ على كل ما قدمتِه لنا، وعلى الكلمات الجميلة التي ستبقى في ذاكرتنا مهما مرت السنوات. 🌷"
    },
    {
        name: "إنصاف المغاربة",
        message: "شكراً لكِ على عطائكِ وصبركِ وحرصكِ الدائم على أن نكون أفضل. لكِ منا كل المحبة والتقدير. 🤍"
    },
    {
        name: "نسرين الياصجين",
        message: "شكراً لكِ على كل لحظة تعليم وتشجيع، وعلى الأثر الجميل الذي تركتِه في رحلتنا. ✨"
    },
    {
        name: "خديجة الشهاب",
        message: "شكراً لكِ على كل جهد بذلتِه من أجلنا، وعلى كل كلمة جعلتنا نؤمن بأننا نستطيع الوصول. 🌸"
    },
    {
        name: "نور المناصير",
        message: "شكراً لكِ على ابتسامتكِ وصبركِ وتشجيعكِ المستمر. وجودكِ كان جزءاً جميلاً من أيامنا. 💗"
    },
    {
        name: "عبير الرحامنة",
        message: "شكراً لكِ لأنكِ جعلتِ التعلم أجمل، ولأنكِ دائماً كنتِ مصدر تشجيع وإلهام لنا. 🌷"
    },
    {
        name: "لطيفة النعيمات",
        message: "شكراً لكِ على كل معلومة وكل تجربة وكل لحظة صبر واهتمام. سيبقى أثركِ معنا دائماً. 🤍"
    },
    {
        name: "غدير الطالب",
        message: "شكراً لكِ على عطائكِ وصبركِ، وعلى كل شيء تعلمناه معكِ. لكِ منا كل الحب والتقدير. 💕"
    },
    {
        name: "سارة الغنانيم",
        message: "شكراً لكِ على كل جهد بذلتِه وكل لحظة جعلتِ فيها أيامنا أجمل. 🌸"
    },
    {
        name: "سائدة الرحاحلة",
        message: "شكراً لكِ على طاقتكِ الجميلة وروحكِ الرائعة، وعلى كل لحظة صنعتِ فيها ذكرى جميلة لنا. 🌷"
    },
    {
        name: "سجى عبيدات",
        message: "شكراً لكِ لأنكِ أضفتِ لمسة جميلة إلى أيامنا، وجعلتِنا نعبّر عن أنفسنا ونستمتع بما نتعلمه. 🎨🤍"
    },
    {
        name: "سحر العمايرة",
        message: "شكراً لكِ على كل معلومة وكل نصيحة وكل جهد قدمتِه لنا بمحبة وإخلاص. ✨"
    },
    {
        name: "إيمان",
        message: "شكراً لكِ على كلماتكِ الطيبة وأخلاقكِ الجميلة وكل أثر تركتِه في قلوبنا. 🌸"
    },
    {
        name: "أروى الصوالحة",
        message: "شكراً لكِ على كل ما علمتِنا إياه، وعلى كل كلمة جميلة ونصيحة ستبقى معنا في حياتنا. 🤍"
    },
    {
        name: "إيمان الحجاحجة",
        message: "شكراً لكِ على اهتمامكِ بنا، وعلى كل مرة استمعتِ فيها لنا ووقفتِ إلى جانبنا. وجودكِ كان سنداً جميلاً. 💗"
    },
    {
        name: "هديل الزهبي",
        message: "شكراً لكِ على دعمكِ وتشجيعكِ، وعلى كل جهد قدمتِه حتى نصل إلى أهدافنا ونفتخر بما ننجزه. 🌷"
    },
    {
        name: "آسيا المناصير",
        message: "شكراً لكِ على عطائكِ وصبركِ، وعلى كل لحظة ساعدتِنا فيها لنصبح أفضل. 🤍"
    },
    {
        name: "هديل",
        message: "شكراً لكِ على كل ما قدمتِه لنا، وعلى كل تشجيع جعلنا نثق بقدراتنا أكثر. 🌸"
    },
    {
        name: "عبير السكارنة",
        message: "شكراً لكِ على دعمكِ واهتمامكِ، وعلى كل أثر جميل تركتِه في رحلتنا التعليمية. 💕"
    },
    {
        name: "رانيا الدباس",
        message: "شكراً لكِ على كل تعب وكل جهد وكل كلمة تشجيع. سيبقى لكِ مكان جميل في ذكرياتنا. ✨"
    },
    {
        name: "برديس الطالب",
        message: "شكراً لكِ على كل مساعدة وكل جهد تبذلينه من أجلنا، وعلى وجودكِ الدائم عندما نحتاج إليكِ. 🌷"
    },
    {
        name: "آمال",
        message: "شكراً لكِ على كل لحظة جميلة وكل كلمة طيبة وكل أثر تركتِه فينا. لكِ منا كل الحب. 🤍"
    },
    {
        name: "حنان خرفان",
        message: "شكراً لكِ على عطائكِ واهتمامكِ، وعلى كل ذكرى جميلة ستبقى معنا من أيام المدرسة. 🌸"
    },
    {
        name: "سماح الجراح",
        message: "شكراً لكِ على كل ما قدمتِه لنا بحب وصبر، وعلى كل لحظة جعلتِ فيها أيامنا أجمل. 💗"
    },
    {
        name: "رند قطيشات",
        message: "شكراً لكِ على ابتسامتكِ وطيبة قلبكِ وكل أثر جميل تركتِه فينا. 🌷"
    },
    {
        name: "أم حسين",
        message: "شكراً لكِ على كل تعب ومحبة واهتمام، وعلى كل شيء جميل قدمتِه لنا خلال سنواتنا في المدرسة. لكِ منا كل التقدير والمحبة. 🤍"
    }
];


// عناصر الصفحة
const container = document.getElementById("teachersContainer");
const popup = document.getElementById("teacherPopup");
const popupName = document.getElementById("popupName");
const popupMessage = document.getElementById("popupMessage");

const closeButton = document.getElementById("closeButton");
const backButton = document.getElementById("backButton");


// إنشاء بطاقات المعلمات
teachers.forEach((teacher, index) => {

    const card = document.createElement("article");

    card.className = "teacher-card";

    card.style.animationDelay = `${Math.min(index * 0.035, 0.7)}s`;

    const number = document.createElement("div");
    number.className = "card-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const flower = document.createElement("div");
    flower.className = "teacher-icon";
    flower.textContent = "🌷";

    const name = document.createElement("h3");
    name.textContent = teacher.name;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "رسالة شكر 🤍";
    button.setAttribute(
        "aria-label",
        `عرض رسالة الشكر للمعلمة ${teacher.name}`
    );

    button.addEventListener("click", () => {
        showMessage(index);
    });

    card.append(number, flower, name, button);

    container.appendChild(card);

});


// عرض رسالة المعلمة
function showMessage(index) {

    const teacher = teachers[index];

    popupName.textContent = teacher.name;
    popupMessage.textContent = teacher.message;

    popup.classList.add("active");
    document.body.style.overflow = "hidden";

    closeButton.focus();

}


// إغلاق الرسالة
function closeMessage() {

    popup.classList.remove("active");
    document.body.style.overflow = "";

}


// أزرار الإغلاق
closeButton.addEventListener("click", closeMessage);
backButton.addEventListener("click", closeMessage);


// إغلاق عند الضغط خارج صندوق الرسالة
popup.addEventListener("click", function (event) {

    if (event.target === popup) {
        closeMessage();
    }

});


// إغلاق باستخدام زر Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && popup.classList.contains("active")) {
        closeMessage();
    }

});