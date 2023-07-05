// кнопки вызова мобильного поиска
const searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', () => {

  //  если при этом открыто меню каталога - скрываем его
  document.getElementById('mob-catalog-btn-call').classList.remove('open');
  document.body.classList.remove('catalog-menu-open');

  // toggle search button class
  searchBtn.classList.toggle('open');
  // remove menu button class if it exists
  menuBtn.classList.remove('open');
  document.body.classList.remove('mobile-menu-open');
  // toggle body class for mobile search
  document.body.classList.toggle('mobile-search-open');
});
