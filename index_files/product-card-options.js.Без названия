const productCardOptions = document.querySelectorAll('.product-card__options');

if (productCardOptions) {
  productCardOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Закрыть все остальные элементы перед открытием выбранного
      productCardOptions.forEach(otherOption => {
        if (otherOption !== option) {
          otherOption.classList.remove('show');
        }
      });

      // Открыть или закрыть выбранный элемент
      option.classList.toggle('show');
    });
  });
}

let productCards = document.querySelectorAll('.product-card');
let productCardsWithCart = [];

productCards.forEach(function (card) {
  if (card.querySelector('.product-card__cart')) {
    productCardsWithCart.push(card);
  }
});

productCardsWithCart.forEach(function (card) {
  let btn = card.querySelector('.product-card__cart');
  let details = card.querySelector('.product-card__details');

  if (details != null) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      details.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
      if (!card.contains(event.target)) {
        details.classList.remove('show');
      }
    });
  }
});
