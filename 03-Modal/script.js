// selecting the classes and assigning to a variable
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);

// open function expression
const openModal = function () {
  // console.log('button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// close function expression
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

// addeventlistener
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keypress event listener
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
});
