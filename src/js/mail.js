document.getElementById('btn__submit').addEventListener('click', function () {
    // call rest to send email
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', false);
    xhr.send(JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        purpose: document.querySelector('#selectCustom option').value
    }));
    
});