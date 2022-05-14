
let time = 10000
function timeout() {
    var check = window.localStorage.getItem('form') || false;
    if (!check) $('#exampleModalLong').modal();
    time += 10000
    setTimeout(timeout, time)
}
setTimeout(timeout, time)


const scriptURL = 'https://script.google.com/macros/s/AKfycby3AgqXEBZ7zFViXJbZ4W37KXdiDc5aKlmTN08QGdviwXzmYctELIP17WNnuO6pv4dm/exec'
const form = document.forms['google-sheet']

const forms = document.forms

console.log('forms', forms)

for (const item in forms) {
    forms[item].addEventListener('submit', e => {

        e.preventDefault()
        fetch(scriptURL, {
            method: 'POST', body: new FormData(forms[item])
        })
            .then(response => {
                $('#tksForm').modal();
                $('#exampleModalLong').modal('hide');
                window.localStorage.setItem('form', true)
            })
            .catch(error => console.error('Error!', error.message))
    })
}

console.log('form', document.forms)

form.addEventListener('submit', e => {
    console.log(e)
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST', body: new FormData(form)
    })
        .then(response => {
            $('#tksForm').modal();
            $('#exampleModalLong').modal('hide');
        })
        .catch(error => console.error('Error!', error.message))
})