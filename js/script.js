const form = document.getElementById("contact");
const name = form.elements['firstName'];
const lastName = form.elements['lastName'];
const area = form.elements['areaCode'];
const telNum = form.elements['telNum'];
const email = form.elements['email'];
const msg = form.elements['message'];
const requiredFields = [
    {input: name, message: 'Name is required'},
    {input: email,message: 'Email is required'},
    {input: message, message: 'Message is required'}
];

function error(input, message) {
    input.className += ' error';

    const error = input.parentElement.previousElementSibling;
    error.innerText = message;
    return false;
}

function success(input) {
    input.className += ' success';

    const error = input.parentElement.previousElementSibling;
    error.innerText = '';
    return true;
}

function requireValue(input, message){
    return input.value.trim() === '' ?
        error(input, message) :
        success(input);
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(input.value.trim()) ?
        success(input) :
        error(input, 'Invalid email format');
}

form.addEventListener('submit', (event) => {

    //stop form submission
    event.preventDefault();
    
    // check required fields
    let valid = true;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    if (valid) {
        valid = validateEmail(email);
    }
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }

    if(lastName.value) {
        console.log(name.value + ' ' + lastName.value);
    } else {
        console.log(name.value);
    }
    if(area.value && telNum.value){
        console.log(area.value + telNum.value);
    }
    if(email.value) {
        console.log(email.value);
    }
    if(msg.value) {
        console.log(message.value);
    }
});
