let password = {};
let email = {},
  signInButton;

function checkInput(){
    console.log("uuuhh");
}

function enableListeners() {
    email.input.addEventListener('blur', function () {
        if (this.value.includes('@')) {
            console.log("You have an @, NOICE");
            email.field.classList.remove('has-error');
        }
        else if (this.value == '') {
            console.log("cant you read?");
            email.field.classList.add('has-error');
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('YAAAAAAAS!!!');
  password.input = document.querySelector('.js-password-input');
  password.field = document.querySelector('.js-password-field');
  password.message = document.querySelector('.js-password-errorMSG');
  email.input = document.querySelector('.js-email-input');
  email.field = document.querySelector('.js-email-field');
  email.message = document.querySelector('.js-email-errorMSG');
  enableListeners();
});
