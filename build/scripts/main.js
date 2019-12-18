import { NONAME } from 'dns';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.burgerMenu ul');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  // burger.classList.toggle('menu');
  //   menu.style.display = 'none';
  //   document.querySelector('.burgerMenu ul').style.display = 'none';
  console.log(e.target);
});
