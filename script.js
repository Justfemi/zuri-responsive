const menuIcon = document.querySelector('.hamburger-menu');
const link = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    link.classList.toggle("change");
});  