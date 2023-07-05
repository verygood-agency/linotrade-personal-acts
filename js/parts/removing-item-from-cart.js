if(document.querySelector('.number-of-products') && document.querySelector('.my-cart__shopping-list')) {
  // Функция для обновления количества товаров в корзине
function updateNumberOfProducts() {
  const numberOfProductsElement = document.querySelector('.number-of-products');
  const shoppingList = document.querySelector('.my-cart__shopping-list');
  const numberOfProducts = shoppingList.querySelectorAll('.order-item--cart').length;

  numberOfProductsElement.textContent = numberOfProducts;
}

// Функция для удаления товара при клике на кнопку удаления
function removeOrderItem(event) {
  if (event.target.matches('.js-delete')) {
    event.target.closest('.order-item--cart').remove();

    // Обновляем количество товаров после удаления элемента
    updateNumberOfProducts();
  }
}

// Вызываем функцию после загрузки страницы
// Находим все товары с классом .order-item--cart и кнопкой .js-delete
const orderItems = document.querySelectorAll('.order-item--cart .js-delete');
  // Добавляем слушатель события клика на каждую кнопку удаления товара
orderItems.forEach((button) => {
  button.addEventListener('click', removeOrderItem);
});

// Обновляем количество товаров в корзине сразу после загрузки страницы
updateNumberOfProducts();

}


