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
    hero1: "Tidak perlu khawatir ada",
    hero2: "Solusi modern untuk traveler di seluruh dunia",
    hero3: "Mulai sekarang",
    blog1: "Apa masalahnya?",
    blog2: "Menjadi Jembatan antara traveller di seluruh dunia dan pemandu wisata yang terpercaya",
    blog3: `Menyediakan Pemandu wisata yang terpercaya dan tersertifikasi`,
    blog4: "Membuat pengalaman wisata Anda menjadi lebih menyenangkanm",
    blog5: "Kelebihan Kami",
    blog6: "Antarmuka yang ramah pengguna",
    blog7: "platform memiliki antarmuka yang ramah pengguna, memastikan pengguna memiliki pengalaman yang baik saat menggunakannya.",
    blog8: "Pemandu Wisata Terpercaya",
    blog9: "Kami jamin pemandu wisata kami terpercaya dan bersertifikat, jadi tidak perlu Khawatir",
    lang1: "Skala Global",
    lang2: "Kami memiliki lingkungan mendunia di setiap tujuan populer. Ke mana pun Anda pergi, kami akan siap melayani.",
    lang3: "Kenapa kami disini?",
    lang4: "Kami di sini untuk menghubungkan wisatawan dengan pemandu mereka jika mereka tidak tahu apa yang harus dilakukan. Kami ingin semua orang dapat mewujudkan impian mereka berkeliling dunia tanpa harus khawatir dengan hambatan sosial. Jadi jika semua orang ingin menjadi seorang traveller, mereka bisa menjadi seorang traveller.",
    lang5: "Tim Kami",
    lang6: "Mereka yang membuat semua ini mungkin",
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
    lang3.textContent = language.id.lang3;
    lang4.textContent = language.id.lang4;
    lang5.textContent = language.id.lang5;
    lang6.textContent = language.id.lang6;
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
