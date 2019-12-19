const burger = document.querySelector('.burger');
const menu = document.querySelector('.burgerMenu');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('burgerMenu--display');
  // menu.style.display = 'none';
});
