
setInterval(function () {
    var check =window.localStorage.getItem('form')
    if(!check) $('#exampleModalLong').modal();
}, 30000);

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzF4Tq4lvPHyDFhmMdYoSUJUbU-uqdqXTl7DGIa0YZLR_bkZjNk277EnlcoBO4QaBm/exec'
const form = document.forms['google-sheet']

const forms = document.forms

for (const item in forms) {
    forms[item].addEventListener('submit', e => {

        e.preventDefault()
        fetch(scriptURL, {
            method: 'POST', body: new FormData(forms[item])
        })
            .then(response => {
                $('#tksForm').modal();
                $('#exampleModalLong').modal('hide');
                window.localStorage.setItem('form',true)
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