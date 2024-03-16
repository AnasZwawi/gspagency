const textElement = document.getElementById("words");
const textArray = ["START !", "GROW !", "SCALE !"];
let index = 1;
textElement.textContent = textArray[0];
setInterval(() => {
  textElement.classList.add("change");
  setTimeout(() => {
    textElement.textContent = textArray[index];
    if(textArray[index] == "START !"){
      textElement.classList.add('start-color');
      textElement.classList.remove('grow-color');
      textElement.classList.remove('scale-color');
    }
    else if(textArray[index] == 'GROW !'){
      textElement.classList.add('grow-color');
      textElement.classList.remove('scale-color');
      textElement.classList.remove('start-color');
    }
    else if(textArray[index] == 'SCALE !'){
      textElement.classList.add('scale-color');
      textElement.classList.remove('grow-color');
      textElement.classList.remove('start-color');
    }
    textElement.classList.remove("change");
    textElement.classList.add()
    index++;
    if (index === textArray.length) {
      index = 0;
    }
  }, 700);
}, 2000);



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements1 = document.querySelectorAll('.hidden1');
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => {observer.observe(el)});
hiddenElements2.forEach((el) => {observer.observe(el)});



let subMenu = document.getElementById('subMenu');

function showMenu(){
  subMenu.classList.add('open-menu');
}

function hideMenu(){
  subMenu.classList.remove('open-menu');
}


