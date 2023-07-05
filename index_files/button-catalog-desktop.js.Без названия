// Найти все кнопки каталога
const catalogBtns = document.querySelectorAll('.catalog-btn-call');

// Функция обработчика клика по кнопке
function handleCatalogButtonClick(event) {
  event.preventDefault();

  const catalogBtn = event.currentTarget;

  // Если при этом открыто меню мобильной навигации - скрываем его
  document.querySelector('.button--menu').classList.remove('open');
  document.body.classList.remove('mobile-menu-open');

  catalogBtn.classList.toggle('open');
  document.body.classList.toggle('catalog-menu-open');

  // Найти элемент с классом .overlay на странице
  const overlay = document.querySelector('.clickable-overlay');

  // Функция для закрытия меню
  function closeMenu() {
    catalogBtn.classList.remove('open');
    document.body.classList.remove('catalog-menu-open');
  }

  // Добавить обработчик событий для элемента .overlay
  overlay.addEventListener('click', () => {
    closeMenu();
    // Удалить обработчик событий после закрытия меню, чтобы избежать повторной регистрации
    overlay.removeEventListener('click', closeMenu);
  });
}

// Добавить обработчики событий для всех найденных кнопок
catalogBtns.forEach((catalogBtn) => {
  catalogBtn.addEventListener('click', handleCatalogButtonClick);
});
