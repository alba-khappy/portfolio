let btnSubmit = document.getElementById('btn__submit');
let btnClose = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup-container');

btnSubmit.addEventListener('click', function () {
    // call rest to send email
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', false);
    xhr.send(JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        purpose: document.querySelector('#selectCustom option').value
    }));

    popup.style.display = 'flex';

});


btnClose.addEventListener('click', function () {
    popup.style.display = 'none';
});