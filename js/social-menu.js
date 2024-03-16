let subMenu = document.getElementById('subMenu');

function showMenu(){
  subMenu.classList.add('open-menu');
}

function hideMenu(){
  subMenu.classList.remove('open-menu');
}

const show1 = document.querySelector('.ul1-google');
const show2 = document.querySelector('.ul2-google')
const show3 = document.querySelector('.ul3-google')

function ulShow1(){
  show1.classList.add('ul-google-show');
  document.querySelector('.ul1-prev > h3 > span').classList.add('rotate-arrow');
}

function ulHide1(){
  show1.classList.remove('ul-google-show');
  document.querySelector('.ul1-prev > h3 > span').classList.remove('rotate-arrow');
}

function ulShow2(){
  show2.classList.add('ul-google-show');
  document.querySelector('.ul2-prev > h3 > span').classList.add('rotate-arrow');
}

function ulHide2(){
  show2.classList.remove('ul-google-show');
  document.querySelector('.ul2-prev > h3 > span').classList.remove('rotate-arrow');
}

function ulShow3(){
  show3.classList.add('ul-google-show');
  document.querySelector('.ul3-prev > h3 > span').classList.add('rotate-arrow');
}

function ulHide3(){
  show3.classList.remove('ul-google-show');
  document.querySelector('.ul3-prev > h3 > span').classList.remove('rotate-arrow');
}