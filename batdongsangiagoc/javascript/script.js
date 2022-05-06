console.log("Hello world")
const scriptURL = 'https://script.google.com/macros/s/AKfycby3AgqXEBZ7zFViXJbZ4W37KXdiDc5aKlmTN08QGdviwXzmYctELIP17WNnuO6pv4dm/exec'
const form = document.forms['google-sheet']

const forms = document.forms

console.log('forms', forms)

for (const item in forms) {
    console.log(item)
    forms[item].addEventListener('submit', e => {

        e.preventDefault()
        fetch(scriptURL, {
            method: 'POST', body: new FormData(forms[item])
        })
            .then(response => console.log("Thanks for Contacting us..! We Will Contact You Soon..."))
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
        .then(response => console.log("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})