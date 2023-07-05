$(document).ready(function() {
  $('#datepicker').datepicker({
    language: 'ru', // Замените 'en' на 'ru'
    range: true,
    multipleDatesSeparator: ' - ',
    onSelect: function(formattedDate, date, inst) {
      // Здесь можно обработать выбранные даты, если это необходимо
    }
  });
});

//Функция уведомления
function fNotification(title = "", text = "") {
  let dialog = document.querySelector(`[data-dialog-modal='modal-notification']`);
  let modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.remove('modal-show');
  });
  document.body.style.overflow = 'hidden';
  dialog.classList.add('modal-show');
  overlay.classList.add('show');

  dialog.querySelector('.title').innerHTML = title;
  dialog.querySelector('.subtitle').innerHTML = text;
}

//Функция анимации кнопок
function fButtonsAnimation() {
  // get all buttons
  var buttons = document.querySelectorAll('.button');

  // add mouseover event listener to each button
  buttons.forEach(function (button) {
    if (!button.classList.contains("add-event-mouseover")) {
      button.addEventListener('mouseover', function (e) {
        // get button position
        var pos = button.getBoundingClientRect();
        var elem_left = pos.left;
        var elem_top = pos.top;

        // get cursor position relative to the button
        var Xinner = e.clientX - elem_left;
        var Yinner = e.clientY - elem_top;

        // get the maximum distance to the corners
        var maxDist = Math.max(
          Math.sqrt(Math.pow(Xinner, 2) + Math.pow(Yinner, 2)),
          Math.sqrt(Math.pow(button.clientWidth - Xinner, 2) + Math.pow(Yinner, 2)),
          Math.sqrt(Math.pow(Xinner, 2) + Math.pow(button.clientHeight - Yinner, 2)),
          Math.sqrt(Math.pow(button.clientWidth - Xinner, 2) + Math.pow(button.clientHeight - Yinner, 2))
        );

        // set position of decoration element
        var decoration = button.querySelector('.decorate');
        decoration.style.left = Xinner + 'px';
        decoration.style.top = Yinner + 'px';
        decoration.style.width = maxDist * 2 + 'px';
        decoration.style.height = maxDist * 2 + 'px';
      });

      // Add mouseout event listener to each button
      button.addEventListener('mouseout', function (e) {
        // Reset decoration element size
        var decoration = button.querySelector('.decorate');
        decoration.style.width = '0';
        decoration.style.height = '0';
      });

      button.classList.add("add-event-mouseover");
    }
  });
}

//Функция обработки избранных товаров
function fFavorites() {
  if (typeof favorites !== "undefined") {
    const btnFavorites = document.querySelectorAll(".js-favorites");

    if (btnFavorites.length > 0) {
      btnFavorites.forEach((btn) => {
        if (btn.dataset.id != undefined && !btn.classList.contains("add-event-click")) {
          //Отмечаем товары уже в избранном
          if (favorites.includes(Number(btn.dataset.id))) {
            btn.classList.add("like");
          }

          btn.addEventListener("click", function (event) {
            event.preventDefault();

            let data = {};
            data["id"] = btn.dataset.id;
            if (btn.classList.contains("like")) {
              data["action"] = "remove";
            } else {
              data["action"] = "add";
            }

            // console.log(data);

            //Добавление товара в избранное
            if (window.BX && window.BX.ajax) {
              window.BX.ajax({
                url: '/local/ajax/favorites.php',
                method: 'POST',
                data: data,
                onsuccess: function (res) {
                  res = JSON.parse(res)
                  // console.log(res);

                  if (res['status']) {
                    if (data["action"] == "remove") {
                      btn.classList.remove("like");
                    } else {
                      btn.classList.add("like");
                    }

                    document.querySelector('.i-like-it').innerHTML = res['count'];
                    if (res['count'] > 0) {
                      document.querySelector('.i-like-it').classList.remove("hidden");
                    } else {
                      document.querySelector('.i-like-it').classList.add("hidden");
                    }
                  } else {
                    alert(res['message']);
                  }
                },
                onfailure: function () {
                  alert("Ошибка");
                }
              })
            }

          });
          btn.classList.add("add-event-click");
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fButtonsAnimation();
  fFavorites();

  //Обработка авторизации
  const formAuth = document.querySelector('#authorization')
  formAuth.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(formAuth);

    if (formData.get("USER_LOGIN") == "" || formData.get("USER_PASSWORD") == "") {
      formAuth.querySelector('.js-error').innerHTML = "Заполните все обязательные поля";
    } else {
      formAuth.querySelector('.js-error').innerHTML = "";
      BX.ajax({
        url: '/local/ajax/authorization.php',
        data: formData,
        method: 'POST',
        dataType: 'json',
        processData: false,
        preparePost: false,
        onsuccess: function (result) {
          result = JSON.parse(result);
          console.log(result);
          if (result.status) {
            location.reload();
          } else {
            formAuth.querySelector('.js-error').innerHTML = result.message;
          }
        },
        onfailure: function () {
          formAuth.querySelector('.js-error').innerHTML = "Ошибка";
        }
      });
    }
  });

  //Обработка формы забыли пароль
  const formSendPassword = document.querySelector('#sendPassword')
  formSendPassword.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(formSendPassword);

    if (formData.get("email") == "") {
      formSendPassword.querySelector('.js-error').innerHTML = "Заполните все обязательные поля";
    } else {
      formSendPassword.querySelector('.js-error').innerHTML = "";
      BX.ajax({
        url: '/local/ajax/sendPassword.php',
        data: formData,
        method: 'POST',
        dataType: 'json',
        processData: false,
        preparePost: false,
        onsuccess: function (result) {
          result = JSON.parse(result);
          console.log(result);
          if (result.status) {
            fNotification("", "Письмо с ссылкой для восстановления пароля отправлено на вашу почту");
          } else {
            formSendPassword.querySelector('.js-error').innerHTML = result.message;
          }
        },
        onfailure: function () {
          formSendPassword.querySelector('.js-error').innerHTML = "Ошибка";
        }
      });
    }
  });
});