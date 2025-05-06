const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const dropdown = document.querySelector('.dropdown');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});