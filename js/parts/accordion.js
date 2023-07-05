const accordions = document.querySelector('.accordions');
if (document.querySelector('.accordions')) {
  const faqItems = document.querySelectorAll('.accordion');
  const accordionHeaders = document.querySelectorAll('.accordion__question'); // Добавить эту строку

  // Expand the first accordion by default
  faqItems[0].classList.add('active');

  accordions.addEventListener('click', (event) => {
    const item = event.target.closest('.accordion');

    // Добавить проверку на то, что клик произошел на заголовке аккордеона
    const isHeaderClicked = [...accordionHeaders].some(header => header.contains(event.target));

    // Если клик произошел на заголовке, то обрабатываем событие
    if (isHeaderClicked) {
      // Collapse all other accordions
      faqItems.forEach(faqItem => {
        if (faqItem !== item && faqItem.classList.contains('active')) {
          faqItem.classList.remove('active');
        }
      });

      // Expand/collapse the clicked accordion
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    }
  });
};




if (window.innerWidth <= 1024) {
  const accordions = document.querySelector('.user-cabinet__accordions');
  if (document.querySelector('.user-cabinet__accordions')) {

    const faqItems = document.querySelectorAll('.user-cabinet__accordion');
    const accordionHeaders = document.querySelectorAll('.user-cabinet__accordion-question'); // Добавить эту строку

    // Expand the first accordion by default
    faqItems[0].classList.add('active');

    accordions.addEventListener('click', (event) => {
      const item = event.target.closest('.user-cabinet__accordion');

      // Добавить проверку на то, что клик произошел на заголовке аккордеона
      const isHeaderClicked = [...accordionHeaders].some(header => header.contains(event.target));

      // Если клик произошел на заголовке, то обрабатываем событие
      if (isHeaderClicked) {

        // Expand/collapse the clicked accordion
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      }
    });
  };
}


