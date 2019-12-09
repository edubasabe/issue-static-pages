const iconMenu = document.querySelector('svg.icon-menu-svg');
const modalSearchButton = document.getElementById('modal_search');
const closeModalSearch = document.getElementById('close_modal_search');
const formSearchBar = document.querySelector('.ino-header-desktop form.input-group.search-bar');
const listItemContainer = document.querySelector('.nav-store-options__search');

document.addEventListener('DOMContentLoaded', () => {

  modalSearchButton.addEventListener('click', () => {
    formSearchBar.classList.add('backdrop-search');
    listItemContainer.classList.add('backdrop-open');
  });

  closeModalSearch.addEventListener('click', () => {
    formSearchBar.classList.remove('backdrop-search');
    listItemContainer.classList.remove('backdrop-open');
  });
});

