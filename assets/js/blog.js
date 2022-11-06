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
    hero1: "Read blogs and articles about our company",
    hero2: "See Blogs",
    blog1: "Guidy's Journey",
    blog2: "GUIDY, a digital startup created by ITS Surabaya undergraduate students",
    blog3: "Get discount travel with your family and friends at the end of the year, only at GUIDY",
    blog4: "GUIDY has won first place in one of Indonesia's national startup competitions in 2022!",
    blog5: "Famous artists and celebrities around the world have chosen GUIDY, now it's your turn!",
    read1: "Read More",
    read2: "Read More",
    read3: "Read More",
    read4: "Read More",
    read5: "Read More",
  },
  id: {
    home: "Beranda",
    about: "Tentang Kami",
    features: "Fitur",
    login: "Masuk",
    switchLang: "ID",
    dd1: "Bahasa Inggris",
    dd2: "Bahasa Indonesia",
    hero1: "Baca blog dan artikel tentang perusahaan kami",
    hero2: "Lihat Blog",
    blog1: "Perjalanan Guidy",
    blog2: "GUIDY, sebuah startup digital yang dibuat oleh para mahasiswa cerdas S-1 ITS dari Surabaya",
    blog3: "Dapatkan diskon traveling bersama keluarga dan teman di akhir tahun, hanya di GUIDY",
    blog4: "GUIDY berhasil meraih juara pertama di salah satu kompetisi startup nasional Indonesia tahun 2022!",
    blog5: "Artis dan selebriti terkenal di seluruh dunia telah memilih GUIDY, sekarang giliran Anda!",
    read1: "Baca Selengkapnya",
    read2: "Baca Selengkapnya",
    read3: "Baca Selengkapnya",
    read4: "Baca Selengkapnya",
    read5: "Baca Selengkapnya",
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
    blog_1.textContent = language.en.blog1;
    blog_2.textContent = language.en.blog2;
    blog_3.textContent = language.en.blog3;
    blog_4.textContent = language.en.blog4;
    blog_5.textContent = language.en.blog5;
    read_1.textContent = language.en.read1;
    read_2.textContent = language.en.read2;
    read_3.textContent = language.en.read3;
    read_4.textContent = language.en.read4;
    read_5.textContent = language.en.read5;
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
    blog_1.textContent = language.id.blog1;
    blog_2.textContent = language.id.blog2;
    blog_3.textContent = language.id.blog3;
    blog_4.textContent = language.id.blog4;
    read_1.textContent = language.id.read1;
    read_2.textContent = language.id.read2;
    read_3.textContent = language.id.read3;
    read_4.textContent = language.id.read4;
    read_5.textContent = language.id.read5;
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
