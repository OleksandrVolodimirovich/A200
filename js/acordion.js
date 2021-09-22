
//написано акордеон для сеції feature-list
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem, numIndex) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('feature__link_active')
                lists[numIndex].classList.toggle('hidden')
            } else {
                btnItem.classList.remove('feature__link_active')
                lists[numIndex].classList.add('hidden') 
            }
        })
    })
})