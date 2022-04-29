
let modal = document.querySelector('.modal-container');
let modalOpen = document.querySelector('.navigation-link-search');
let closeModal = document.querySelector('.modal-close-button')

modalOpen.addEventListener('click', function () {
  if (modal.classList.contains('modal-container-close')) {
    modal.classList.remove('modal-container-close');
    modal.classList.add('modal-container-open');
  }
});

closeModal.addEventListener('click', function() {
  modal.classList.remove('modal-container-open')
  modal.classList.add('modal-container-close')
})

modal.addEventListener('click', function() {
  modal.classList.remove('modal-container-open')
  modal.classList.add('modal-container-close')
})

