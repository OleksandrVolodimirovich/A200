const burger = document.querySelector('.humburger-menu');
const menuMob = document.querySelector('.menu');

const toggleMenu = () => {
    menuMob.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

burger.addEventListener('click', () => toggleMenu());