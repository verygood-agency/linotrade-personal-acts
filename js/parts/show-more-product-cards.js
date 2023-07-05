// это не боевая фича. просто для клиента, что бы он мог поиграться с вёрсткой, так что на бой не надо её тащить.

// найти кнопку .show-more-product-cards и отслеживать событие клика по ней.cards
// каждый раз, когда пользователь кликает по кнопке - клонировать первые четыре карточки с классом .product-card внутри элемента с классом .product-catalog__card-list

const showMoreButton = document.querySelector('.show-more-product-cards');
const productCatalog = document.querySelector('.product-catalog__card-list');

if (showMoreButton && productCatalog) {
  showMoreButton.addEventListener('click', (event) => {
    event.preventDefault();

    const productCards = productCatalog.querySelectorAll('.product-card');

    if (productCards.length >= 4) {
      for (let i = 0; i < 4; i++) {
        const clonedCard = productCards[i].cloneNode(true);
        productCatalog.appendChild(clonedCard);
      }
    }
  });
}

