const tabLinks = document.querySelectorAll('.catalog-menu__tabs-link');

function addHelperClass(event) {
  const targetElementId = event.target.getAttribute('data-target');
  const targetElement = document.querySelector(targetElementId);

  // Удалить вспомогательный класс с других элементов
  tabLinks.forEach(link => {
    if (link !== event.target) {
      const otherTargetElementId = link.getAttribute('data-target');
      const otherTargetElement = document.querySelector(otherTargetElementId);

      link.classList.remove('active');
      otherTargetElement.classList.remove('active');
    }
  });

  // Добавить вспомогательный класс на текущий элемент
  event.target.classList.add('active');
  targetElement.classList.add('active');
}

// Добавить обработчик события mouseover для каждого элемента .tabs__link
tabLinks.forEach(link => {
  link.addEventListener('mouseover', addHelperClass);
});

if (window.innerWidth <= 550) {
  tabLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Остановить действие по умолчанию, если ссылка имеет атрибут href
      document.body.classList.add('catalog-menu-step-2');
    });
  });

  const menuReturn = document.querySelector('.catalog-menu__return');

  if (menuReturn) {
    menuReturn.addEventListener('click', event => {
      event.preventDefault(); // Остановить действие по умолчанию, если элемент имеет атрибут href
      document.body.classList.remove('catalog-menu-step-2');
    });
  }
}
