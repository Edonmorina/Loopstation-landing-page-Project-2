const toggle = document.querySelector('.toggle');

const container2 = document.querySelector('.container2');

const links = document.querySelectorAll('.container2 li');

const cardContainer = document.querySelector('.card-container-m');



toggle.addEventListener('click' , () => {
    container2.classList.toggle("open");
    cardContainer.classList.toggle('close');
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
})