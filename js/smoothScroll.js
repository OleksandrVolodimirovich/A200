// 1-й варіан простого плавного скролу
/*
const linksHead = document.querySelectorAll('.menu-list__link');

linksHead.forEach(itemOrAnyName => {
    //перебираю пункти(itemOrAnyName) меню по кліку, для переходу по якорям
    itemOrAnyName.addEventListener('click', (EventOrAnyName) => {
        EventOrAnyName.preventDefault();//відміна переходу по якорях
        
        const ID = EventOrAnyName.target.getAttribute('href').substr(1); 
        //мені потрібно отримати ID(#contact) без решітки(contact), використаю метод (.substr(1))->цифра в дужках вказує к-сть символів, яку потрібно відрізати 
    
        document.getElementById(ID).scrollIntoView({
            //шукаю привязану по ID секцію і застосовою метод(.scrollIntoView) для перемотки від меню до секції по ID
            behavior: 'smooth', //плавнв прокрутка
            block: 'start' // вказує частину секції куди буде прокрутка
        })

    })
})
*/

// 2-й варіант. плавного скрол + кнопка вниз, з застосуванням спред оператора

const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead, mainScroll]; //створив масив з спред оператором і обєднав linksHead, mainScroll

newArray.forEach(itemOrAnyName => {
//перебираю масив з елементами
    itemOrAnyName.addEventListener('click', (EventOrAnyName) => {
        EventOrAnyName.preventDefault();
        
        const ID = EventOrAnyName.target.getAttribute('href').substr(1); 
    
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth', 
            block: 'start' 
        })
    })
})