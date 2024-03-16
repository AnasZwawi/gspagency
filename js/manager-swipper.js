const anas ={
   h1:"Anas Zwawi",
   p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut fuga aliquid consectetur dolore. Placeat?ddddddddddddddddddddd",
   img:"images/anas.png"
}

const ramzi ={
   h1:"Ramzi Ben Abid",
   p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut fuga aliquid consectetur dolore. Placeat?",
   img:"images/ramzi.png"
}

const teamName = document.querySelector('.team-name');

const teamContent =document.querySelector('.team-content')

const teamImg = document.querySelector('.team-person')

const rightArrow =document.querySelector('.arrow-right')

const leftArrow =document.querySelector('.arrow-left')

rightArrow.addEventListener('click',()=>{
   if(teamName.innerHTML=="Ramzi Ben Abid"){
      teamName.innerHTML=anas.h1
      teamContent.innerHTML=anas.p
      teamImg.src =anas.img
   }
   else if(teamName.innerHTML=="Anas Zwawi"){
      teamName.innerHTML=ramzi.h1
      teamContent.innerHTML=ramzi.p
      teamImg.src =ramzi.img
   }
})

leftArrow.addEventListener('click',()=>{
   if(teamName.innerHTML=="Ramzi Ben Abid"){
      teamName.innerHTML=anas.h1
      teamContent.innerHTML=anas.p
      teamImg.src =anas.img
   }
   else if(teamName.innerHTML=="Anas Zwawi"){
      teamName.innerHTML=ramzi.h1
      teamContent.innerHTML=ramzi.p
      teamImg.src =ramzi.img
   }
})