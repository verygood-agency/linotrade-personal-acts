if (document.querySelector('.mySwiper')) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper .swiper-button-next",
      prevEl: ".mySwiper .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });
};

if (document.querySelector('.mySwiper-2')) {

  var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper-2 .swiper-button-next",
      prevEl: ".mySwiper-2 .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });

};

if (document.querySelector('.mySwiper-3')) {

  var swiper3 = new Swiper(".mySwiper-3", {
    slidesPerView: 6,
    spaceBetween: 32,
    // loop: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".mySwiper-3 .swiper-button-next",
      prevEl: ".mySwiper-3 .swiper-button-prev",
    },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      0: { // при 0px и выше
        // direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: 2,
      },
      600: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 3,
      },
      1024: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 4,
      },
      1370: { // при 0px и выше
        // direction: 'horizontal',
        slidesPerView: 5,
      },
      1610: { // при 768px и выше
        // direction: 'vertical',
        slidesPerView: 6,
      }
    },
  });

};

// большой слайдер
if (document.querySelector('.custom-slider')) {
  var swiper = new Swiper(".custom-slider .swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },

    slidesPerView: 1,
    // loop: true,
    navigation: {
      nextEl: ".custom-slider .navigation-button-next",
      prevEl: ".custom-slider .navigation-button-prev",
    },
    on: {
      slideChange: function () {
        setActiveThumbnail(this.activeIndex);
      }
    }
  });

  // Получение всех элементов .mini-gallery
  var galleryEls = document.querySelectorAll('.mini-gallery .image');

  // Функция для установки активного класса на миниатюру
  function setActiveThumbnail(index) {
    // Удаление активного класса со всех миниатюр
    galleryEls.forEach(function (galleryEl) {
      galleryEl.classList.remove('active');
    });

    // Добавление активного класса к текущей миниатюре
    // Модульное деление используется из-за циклического переключения слайдов
    var activeThumbnail = galleryEls[index % galleryEls.length];
    activeThumbnail.classList.add('active');
  }

  // Установка активного класса на начальный слайд
  setActiveThumbnail(swiper.activeIndex);

  // Добавление обработчика события click на каждый элемент .mini-gallery
  galleryEls.forEach(function (galleryEl, index) {
    galleryEl.addEventListener('click', function (e) {
      e.preventDefault();
      // Переход к соответствующему слайду
      // Индекс увеличивается на 1, т.к. Swiper начинается с индекса 1
      swiper.slideTo(index);
    });
  });
}


