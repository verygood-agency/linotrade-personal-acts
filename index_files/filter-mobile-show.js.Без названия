const filterCall = document.querySelector('.filter-call');
const filterClose = document.querySelector('.filter-close');
const clickableOverlay = document.querySelector('.clickable-overlay');

function closeFilter() {
  document.body.classList.remove('filter-open');
}

if (filterCall) {
  filterCall.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.add('filter-open');
  });
}

if (filterClose) {
  filterClose.addEventListener('click', (event) => {
    event.preventDefault();
    closeFilter();
  });
}

if (clickableOverlay) {
  clickableOverlay.addEventListener('click', () => {
    if (document.body.classList.contains('filter-open')) {
      closeFilter();
    }
  });
}
