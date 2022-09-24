// SIGNIN FORM VALIDATION
const userName = document.querySelector('#username');
const passwordSignIn = document.querySelector('#passwordSignIn');
const SignInform = document.querySelector('#signin-form');

SignInform.addEventListener('submit', function(e) {
    e.preventDefault();
    if (userName.value === '' || passwordSignIn.value === '') {
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '20px';
        errorMessage.style.fontWeight = '800';
        errorMessage.innerHTML = 'sorry,all fields must have a value';
        SignInform.prepend(errorMessage);
        document.querySelector('#username') = '';
        document.querySelector('#passwordSignIn') = '';
    } else {
        validate();
    }
});

function validate() {
    window.location.href = 'learn.html';
}
// FORM VALIDATION CODE
const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if (firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }
    if (lastnameValue === '') {
        setError(lastname, 'lastname is required');
    } else {
        setSuccess(lastname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if (password1Value === '') {
        setError(password1, 'Please confirm your password');
    } else if (password1Value.length !== passwordValue.length) {
        setError(password1, "Passwords doesn't match");
    } else {
        setSuccess(password1);
    }
};

// MODAL SIGN IN BOX 1

let button = document.getElementById('btn1');
button.addEventListener('click', display);
let closePopUp = document.getElementById('close-popup');
closePopUp.addEventListener('click', close);

function display() {
    let popup = document.querySelector('#popup');
    popup.style.display = 'flex';
}

function close() {
    let popUpClose = document.querySelector('#popup');
    popUpClose.style.display = 'none';
}

// MODAL REGISTER IN BOX 2

let button1 = document.getElementById('btn2');
button1.addEventListener('click', displaypop);
let closePopUp1 = document.getElementById('close-popup1');
closePopUp1.addEventListener('click', closepop);

function displaypop() {
    let popup1 = document.querySelector('#popup1');
    popup1.style.display = 'flex';
}

function closepop() {
    let popUpClose1 = document.querySelector('#popup1');
    popUpClose1.style.display = 'none';
}