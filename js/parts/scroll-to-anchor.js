
var headerHeight = document.querySelector('.header').offsetHeight; // Замените '.header' на селектор вашей шапки
var anchorLinks = document.querySelectorAll('.glossary-terms__navigation a[href^="#"]');

anchorLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      var scrollToPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  });
});

