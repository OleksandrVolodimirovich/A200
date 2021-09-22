const dataTabsHandler = document.querySelectorAll('[data-tabs-handler]')//отримаю дата атрибут
const dataTabsField = document.querySelectorAll('[data-tabs-field]')

for (let btn of dataTabsHandler){
    btn.addEventListener('click', () => {
        dataTabsHandler.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        dataTabsField.forEach(content => {
            if(content.dataset.tabsField === btn.dataset.tabsHandler){ //dataset це data атрибут, потрібно вказувати без data
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}