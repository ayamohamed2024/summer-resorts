const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const number = document.getElementById('number');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classlist.add('succes');
    inputControl.classlist.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const number = number.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'provid a valid email address')
    }else{
        setSuccess(email)
    }

    if(passwordValue === '') {
        setError(password,'password is required');
    }else if(passwordValue.length < 8 ) {
        setError(password, 'password must be at least 8 character .')
    }else{
        setSuccess(password);
    }

    if(numberValue === '') {
        setError(number, 'please confirm your phone number');
    }else if (numberValue.length < 11 ) {
        setError(number, 'password must be equal 11 character .');
    }else{
        setSuccess(number);
    }

};