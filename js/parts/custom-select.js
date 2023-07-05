var customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach(function (select) {
  var selected = select.querySelector(".custom-select__selected");
  var options = select.querySelector(".custom-select__options");

  selected.addEventListener("click", function () {
    select.classList.toggle("open");
  });

  var selectOptions = options.querySelectorAll(".custom-select__option");
  selectOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      var value = this.getAttribute("data-value");
      selected.textContent = this.textContent;
      select.classList.remove("open");
      var input = select.querySelector("input[type=hidden]");
      input.value = value;
      input.dispatchEvent(new Event('input'));
    });
  });

  var defaultValue = select.getAttribute("data-default");
  if (defaultValue) {
    // selected.textContent = defaultValue;
    var defaultOption = options.querySelector('.custom-select__option[data-value="' + defaultValue + '"]');
    if (defaultOption) {
      var defaultOptionValue = defaultOption.getAttribute("data-value");
      var input = select.querySelector("input[type=hidden]");
      input.value = defaultOptionValue;
      selected.textContent = defaultOption.textContent;
    }
  }

  document.addEventListener("click", function (event) {
    if (!select.contains(event.target)) {
      select.classList.remove("open");
    }
  });
});
