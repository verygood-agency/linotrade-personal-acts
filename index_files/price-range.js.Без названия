if (document.querySelector(".price-range__progress")) {
  const rangeInputs = document.querySelectorAll(".price-range__ranges input"),
    priceInputs = document.querySelectorAll(".price-range__inputs input"),
    progress = document.querySelector(".price-range__progress");

  // Значения по умолчанию
  const defaultValues = {
    min: 0,
    max: 10000,
    step: 100,
  };

  // Задаем минимальный разрыв между ценами
  let priceGap = 1;

  // Устанавливаем значения по умолчанию и шаг для ползунков
  // rangeInputs.forEach((input, index) => {
  //   input.min = index === 0 ? defaultValues.min : defaultValues.min + priceGap;
  //   input.max = index === 1 ? defaultValues.max : defaultValues.max - priceGap;
  //   input.value = index === 0 ? defaultValues.min : defaultValues.max;
  //   input.step = defaultValues.step;
  // });

  // Устанавливаем значения по умолчанию для полей ввода цены
  // priceInputs.forEach((input, index) => {
  //   input.value = index === 0 ? defaultValues.min : defaultValues.max;
  // });

  // Обновление положения ползунков на основе значений полей ввода
  function updateRangeInputs() {
    const minPrice = parseInt(priceInputs[0].value);
    const maxPrice = parseInt(priceInputs[1].value);

    rangeInputs[0].value = minPrice;
    rangeInputs[1].value = maxPrice;
    progress.style.left = ((minPrice - rangeInputs[0].min) / (rangeInputs[0].max - rangeInputs[0].min)) * 100 + "%";
    progress.style.right = 100 - ((maxPrice - rangeInputs[1].min) / (rangeInputs[1].max - rangeInputs[1].min)) * 100 + "%";
  }

  // Инициализация ползунков
  updateRangeInputs();

  // Добавляем слушатели событий для полей ввода цены
  priceInputs.forEach(input => {
    input.addEventListener("input", e => {
      const minPrice = parseInt(priceInputs[0].value);
      const maxPrice = parseInt(priceInputs[1].value);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputs[1].max) {
        updateRangeInputs();
      }
    });
  });

  // Добавляем слушатели событий для ползунков диапазона
  rangeInputs.forEach(input => {
    input.addEventListener("input", e => {
      const minVal = parseInt(rangeInputs[0].value);
      const maxVal = parseInt(rangeInputs[1].value);

      if ((maxVal - minVal) < priceGap) {
        if (e.target.classList.contains("price-range__range--min")) {
          rangeInputs[0].value = maxVal - priceGap;
        } else {
          rangeInputs[1].value = minVal + priceGap;
        }
      } else {
        priceInputs[0].value = minVal;
        priceInputs[1].value = maxVal;
        progress.style.left = ((minVal - rangeInputs[0].min) / (rangeInputs[0].max - rangeInputs[0].min)) * 100 + "%";
        progress.style.right = 100 - ((maxVal - rangeInputs[1].min) / (rangeInputs[1].max - rangeInputs[1].min)) * 100 + "%";
      }
    });
  });

};
