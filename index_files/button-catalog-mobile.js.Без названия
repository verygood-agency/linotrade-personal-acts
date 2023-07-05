// кнопка каталога мобилка
const catalogBtnMob = document.getElementById('mob-catalog-btn-call');

catalogBtnMob.addEventListener('click', (event) => {
  event.preventDefault();
  //  если при этом открыто меню мобильной навигации - скрываем его
  document.querySelector('.button--menu').classList.remove('open');
  document.body.classList.remove('mobile-menu-open');
  // если показан мобильный поиск - скрываем его
  menuBtn.classList.remove('open');
  document.body.classList.remove('mobile-search-open');
  searchBtn.classList.remove('open');

  catalogBtnMob.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');
});
