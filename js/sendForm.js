const form = document.querySelector('.form-test-drive');

// https://jsonplaceholder.typicode.com
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {}

    for (let { name, value } of form.elements){
        
        if (name){
            data[name] = value;
        }
    }

    //метод GET

    // fetch('https://jsonplaceholder.typicode.com/post').then(respons => {
    //     if(respons.status === 200 || respons.status === 201){
    //         return respons.json()
    //     } else {
    //         throw new Error(Response.status)
    //     }
    // }).then(data => {
    //     console.log(data);
    // }).catch(error => {
    //     alert('ERROR' + error.message);
    // });

    //метод POST
    fetch('https://jsonplaceholder.typicode.com/posts', { //замінити ссилку для відправки на сервер і 
        method: 'POST',                                     // відредагувати налаштування
        body: JSON.stringify(data)
    })
    .then(respons => {
        if(respons.status === 200 || respons.status === 201){
            return respons.json()
        } else {
            throw new Error(Response.status)
        }
    })
    .then(data => {
        alert('УСПЕХ');//зробити модальне вікно
        form.reset();
    })
    .catch(error => {
        alert('ERROR' + error.message);
    });

})