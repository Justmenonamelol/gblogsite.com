const burger = document.querySelector('.burger');
const menu = document.querySelector('.burgerMenu ul');

burger.addEventListener('click', function(e) {
  document.body.classList.toggle('burgerMenu--display');
});
