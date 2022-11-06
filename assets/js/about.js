const dataReload = document.querySelectorAll("[data-reload]");

const language = {
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    features: "Fitur",
    login: "Masuk",
    switchLang: "ID",
    dd1: "Bahasa Inggris",
    dd2: "Bahasa Indonesia",
    hero1: "Apa itu ",
    hero2: "Apa yang kami lakukan, dan kenapa dunia membutuhkan kita?",
    hero3: "Mulai sekarang",
    blog1: "Apa yang kami lakukan?",
    blog2: "Khawatir dengna bahasa?",
    blog3: `"Language barrier" menghantui pikiran Anda, sementara Anda tidak punya waktu untuk mempelajari bahasa mereka`,
    blog4: "Gak tau harus tanya kemana?",
    blog5: "Tidak ada yang Anda kenal, sementara Anda tidak tahu apa-apa tentang tempat-tempat baru itu.",
    blog6: "Tidak masalah, ada Kami",
    blog7: "Sebuah platform yang menyatukan wisatawan di seluruh dunia dengan pemandu wisata yang terpercaya dan kompeten.",
    blog8: "Kenali kami lebih jauh dengan",
    blog9: "Video Company Profile Kami",
    lang1: "Testimoni Kami",
    lang2: "Guidy adalah platform yang bagus bagi mereka yang ingin mulai bepergian keliling dunia tetapi tidak tahu harus mulai dari mana. Ini membantu kami menemukan pemandu wisata terbaik untuk perjalanan kami sehingga kami dapat menikmati perjalanan kami tanpa khawatir tentang hambatan bahasa atau culture shock apa pun."
},
};

if (window.location.hash) {
 if (window.location.hash === "#id") {
    nav_home.textContent = language.id.home;
    nav_about.textContent = language.id.about;
    nav_features.textContent = language.id.features;
    log_in.textContent = language.id.login;
    switch_lang.textContent = language.id.switchLang;
    drop_down_1.textContent = language.id.dd1;
    drop_down_2.textContent = language.id.dd2;
    hero1.textContent = language.id.hero1;
    hero2.textContent = language.id.hero2;
    blog1.textContent = language.id.blog1;
    blog2.textContent = language.id.blog2;
    blog3.textContent = language.id.blog3;
    blog4.textContent = language.id.blog4;
    blog5.textContent = language.id.blog5;
    blog6.textContent = language.id.blog6;
    blog7.textContent = language.id.blog7;
    blog8.textContent = language.id.blog8;
    blog9.textContent = language.id.blog9;
    lang1.textContent = language.id.lang1;
    lang2.textContent = language.id.lang2;
    
  }
}

dataReload[0].onclick = function () {
  window.location.hash = "en";
  location.reload();
};

dataReload[1].onclick = function () {
  window.location.hash = "id";
  location.reload();
};
