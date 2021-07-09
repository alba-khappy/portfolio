document.addEventListener('DOMContentLoaded', function () {
    new JustValidate('.form', {
    colorWrong: '#F31111',
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        mail: {
            required: true,
            email: true
        },

    },

    messages: {
        name: {
            required: 'Как вас зовут?'
        },
        mail: {
            required: 'Укажите ваш email'
        },
    },
});
});