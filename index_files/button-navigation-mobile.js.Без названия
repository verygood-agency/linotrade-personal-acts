const menuBtn = document.getElementById('menu-button');

menuBtn.addEventListener('click', () => {
  //  если при этом открыто меню каталога - скрываем его
  document.getElementById('mob-catalog-btn-call').classList.remove('open');
  document.body.classList.remove('catalog-menu-open');
  // toggle menu button class
  menuBtn.classList.toggle('open');
  // remove search button class if it exists
  searchBtn.classList.remove('open');
  document.body.classList.remove('mobile-search-open');
  // toggle body class for mobile menu
  document.body.classList.toggle('mobile-menu-open');
});
