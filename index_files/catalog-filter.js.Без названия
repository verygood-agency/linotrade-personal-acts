const filterGroups = document.querySelectorAll('.catalog-filter__group');

filterGroups.forEach(group => {
  const groupLabel = group.querySelector('.catalog-filter__group-label');
  const checkboxList = group.querySelector('.catalog-filter__checkbox-list');

  if (checkboxList) {
    const items = checkboxList.querySelectorAll('li');

    if (items.length > 5) {
      const showMoreButton = document.createElement('button');
      showMoreButton.classList.add('catalog-filter__show-more');
      showMoreButton.textContent = 'Смотреть еще';
      group.appendChild(showMoreButton);

      const updateItemsVisibility = (showAll) => {
        items.forEach((item, index) => {
          if (index >= 5) {
            item.style.display = showAll ? 'list-item' : 'none';
          }
        });

        showMoreButton.textContent = showAll ? 'Скрыть' : 'Смотреть еще';
        showMoreButton.setAttribute('data-expanded', showAll);
      };

      updateItemsVisibility(false);

      showMoreButton.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = showMoreButton.getAttribute('data-expanded') === 'true';
        updateItemsVisibility(!isExpanded);
      });
    }
  }

  // раскрывашка для пункта фильтра
  groupLabel.addEventListener('click', () => {
    group.classList.toggle('active');
  });
});


