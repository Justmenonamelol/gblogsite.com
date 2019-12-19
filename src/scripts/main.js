const burger = document.querySelector('#burger');
const menu = document.querySelector('.burgerMenu');

burgerExpand.addEventListener('click', function(e) {
  document.body.classList.toggle('burgerMenu');
});
