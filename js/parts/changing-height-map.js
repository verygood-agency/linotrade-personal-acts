// Функция для обновления высоты элемента с id="map"
function updateMapHeight() {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    const width = mapElement.clientWidth;
    let newHeight = width;

    // Если ширина окна 1250px или меньше, уменьшаем высоту в два раза
    if (window.innerWidth <= 1250) {
      newHeight = width / 2;
    }

    mapElement.style.height = `${newHeight}px`;
  }
}

// Обновляем высоту элемента с id="map" после полной загрузки страницы
window.addEventListener('load', updateMapHeight);

// Обновляем высоту элемента с id="map" при изменении размера окна
// window.addEventListener('resize', updateMapHeight);
