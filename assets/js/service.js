const dataReload = document.querySelectorAll("[data-reload]");

const language = {
  en: {
    home: "Home",
    about: "About Us",
    features: "Features",
    login: "Log in",
    switchLang: "EN",
    dd1: "English",
    dd2: "Indonesian",
    hero1: "See the most great and most complete service from us",
    hero2: "Check It Now",
    text1: "Reliable Tour Guide",
    text2: "We provide tour guides who have qualified and experienced skills in the world of tourism",
    text3: "Trustworthy Translator",
    text4: "In addition to tour guides, we also provide trusted translators to help you get a satisfying travel experience",
    text5: "Trustworthy Translator",
    text6: "In addition to tour guides, we also provide trusted translators to help you get a satisfying travel experience",
    text7: "Connected All Over the World",
    text8: "Our tour guides are located in more than 70 tourist destinations from all over the world",
    text9: "FIND YOUR GUIDE AROUND THE WORLD",
    next1: "Next",
    next2: "Next",
    next3: "Next",
    next4: "Next",
  },
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    features: "Fitur",
    login: "Masuk",
    switchLang: "ID",
    dd1: "Bahasa Inggris",
    dd2: "Bahasa Indonesia",
    hero1: "Lihat layanan paling hebat dan terlengkap dari kami",
    hero2: "Periksa sekarang",
    text1: "Pemandu Wisata Andal",
    text2: "Kami menyediakan pemandu wisata yang memiliki skill mumpuni dan berpengalaman dalam dunia pariwisata",
    text3: "Penerjemah Tepercaya",
    text4: "Selain pemandu wisata, kami juga menyediakan penerjemah terpercaya untuk membantu Anda mendapatkan pengalaman perjalanan yang memuaskan",
    text5: "Penerjemah Tepercaya",
    text6: "Selain pemandu wisata, kami juga menyediakan penerjemah terpercaya untuk membantu Anda mendapatkan pengalaman perjalanan yang memuaskan",
    text7: "Terhubung di Seluruh Dunia",
    text8: "Pemandu wisata kami berlokasi di lebih dari 70 tujuan wisata dari seluruh dunia",
    text9: "TEMUKAN PEMANDU WISATA ANDA DI SELURUH DUNIA",
    next1: "Selanjutnya",
    next2: "Selanjutnya",
    next3: "Selanjutnya",
    next4: "Selanjutnya",
  },
};

if (window.location.hash) {
  if (window.location.hash === "#en") {
    nav_home.textContent = language.en.home;
    nav_about.textContent = language.en.about;
    nav_features.textContent = language.en.features;
    log_in.textContent = language.en.login;
    switch_lang.textContent = language.en.switchLang;
    drop_down_1.textContent = language.en.dd1;
    drop_down_2.textContent = language.en.dd2;
    hero_1.textContent = language.en.hero1;
    hero_2.textContent = language.en.hero2;
    text_1.textContent = language.en.text1;
    text_2.textContent = language.en.text2;
    text_3.textContent = language.en.text3;
    text_4.textContent = language.en.text4;
    text_5.textContent = language.en.text5;
    text_6.textContent = language.en.text6;
    text_7.textContent = language.en.text7;
    text_8.textContent = language.en.text8;
    text_9.textContent = language.en.text9;
    next_1.textContent = language.en.next1;
    next_2.textContent = language.en.next2;
    next_3.textContent = language.en.next3;
    next_4.textContent = language.en.next4;
  } else if (window.location.hash === "#id") {
    nav_home.textContent = language.id.home;
    nav_about.textContent = language.id.about;
    nav_features.textContent = language.id.features;
    log_in.textContent = language.id.login;
    switch_lang.textContent = language.id.switchLang;
    drop_down_1.textContent = language.id.dd1;
    drop_down_2.textContent = language.id.dd2;
    hero_1.textContent = language.id.hero1;
    hero_2.textContent = language.id.hero2;
    text_1.textContent = language.id.text1;
    text_2.textContent = language.id.text2;
    text_3.textContent = language.id.text3;
    text_4.textContent = language.id.text4;
    text_5.textContent = language.id.text5;
    text_6.textContent = language.id.text6;
    text_7.textContent = language.id.text7;
    text_8.textContent = language.id.text8;
    text_9.textContent = language.id.text9;
    next_1.textContent = language.id.next1;
    next_2.textContent = language.id.next2;
    next_3.textContent = language.id.next3;
    next_4.textContent = language.id.next4;
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
