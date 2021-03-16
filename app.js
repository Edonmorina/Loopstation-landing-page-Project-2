
const toggle = document.querySelector('.toggle');
const container2 = document.querySelector('.container2');
const links = document.querySelectorAll('.container2 li');
const cardContainer = document.querySelector('.card-container-m');
const body = document.querySelector('body');
const html = document.querySelector('html');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

toggle.addEventListener('click' , () => {
    
    container2.classList.toggle("open");
    cardContainer.classList.toggle('close');
    body.classList.toggle('close');
    html.classList.toggle('close');
    links.forEach(link =>{
        link.classList.toggle('fade');
    })

    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true ;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
  
})





