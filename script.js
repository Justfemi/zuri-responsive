// const menuIcon = document.querySelector('.hamburger-menu');
// const link = document.querySelector('.nav-bar');

// menuIcon.addEventListener('click', () => {
//     link.classList.toggle("change");
// });


const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})