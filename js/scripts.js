// Функции
// функция подключения скриптов
function includeFiles(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

// Основная рабочая область
document.addEventListener("DOMContentLoaded", () => {

  // подключаем файлы тут
  includeFiles("./js/parts/buttons-animate.js");
  includeFiles("./js/parts/hover-animate.js");
  includeFiles("./js/parts/custom-select.js");
  includeFiles("./js/parts/accordion.js");
  includeFiles("./js/parts/catalog-navigation.js");
  includeFiles("./js/parts/mobile-menu-in-basement.js");
  includeFiles("./js/parts/button-catalog-desktop.js");
  includeFiles("./js/parts/button-catalog-mobile.js");
  includeFiles("./js/parts/button-navigation-mobile.js");
  includeFiles("./js/parts/button-sub-navigation-mobile.js");
  includeFiles("./js/parts/button-search-mobile.js");
  includeFiles("./js/parts/modals.js");
  includeFiles("./js/parts/price-range.js");
  includeFiles("./js/parts/catalog-filter.js");
  includeFiles("./js/parts/add-favorite.js");
  includeFiles("./js/parts/product-card-options.js");
  // includeFiles("./js/parts/show-more-product-cards.js");
  includeFiles("./js/parts/filter-mobile-show.js");
  includeFiles("./js/parts/swiper-collection.js");
  includeFiles("./js/parts/input-number.js");
  includeFiles("./js/parts/scroll-to-anchor.js");
  includeFiles("./js/parts/yandex.map.js");
  includeFiles("./js/parts/changing-height-map.js");
  // includeFiles("./js/parts/removing-item-from-cart.js");

  // document.querySelector('#calendar-start-date');

  new AirDatepicker('#calendar-start-date', {
    classes: 'custom-calendar'

  })

  new AirDatepicker('#calendar-finish-date', {
    classes: 'custom-calendar'

  });

});
