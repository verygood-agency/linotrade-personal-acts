const favoriteButtons = document.querySelectorAll('.add-favorite');
const likeCounter = document.querySelector('.i-like-it');

function updateLikeCounter() {
  const likedButtons = document.querySelectorAll('.add-favorite.like');
  likeCounter.textContent = likedButtons.length;
}

favoriteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    button.classList.toggle('like');
    updateLikeCounter();
  });
});

// Инициализируем счетчик при загрузке страницы
updateLikeCounter();
