const burger = document.querySelector('.humburger-menu');
const menuMob = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');

const toggleMenu = () => {
    burger.classList.toggle('humburger-menu-active');
    menuMob.classList.toggle('menu-active');

    menuList.addEventListener('click', (event) =>{
        if (event.target.classList.contains('menu-list__link')){
            burger.classList.remove('humburger-menu-active');
            menuMob.classList.remove('menu-active');
        };
    })
}

burger.addEventListener('click', () => toggleMenu()); // варіант -1
//burger.addEventListener('click', toggleMenu); -> варіант - 2