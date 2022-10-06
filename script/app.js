let password = {};

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
  password.input = document.querySelector('.js-password-input');
  password.toggle = document.querySelector('.js-password-toggle');
  password.hide = document.querySelector('.c-toggle-password__icon--hide');
  password.show = document.querySelector('.c-toggle-password__icon--show');

  password.toggle.addEventListener('change', function () {
    if (password.toggle.checked) {
      password.input.type = 'input';
      password.hide.classList.add('o-hide-accessible');
      password.show.classList.remove('o-hide-accessible');
    } else {
      password.input.type = 'password';
      password.hide.classList.remove('o-hide-accessible');
      password.show.classList.add('o-hide-accessible');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});