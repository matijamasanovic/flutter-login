let session = new Session();
session = session.getSession();

if (session !== '') {
  window.location.href = 'flutter.html';
}

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalWindow = document.querySelector('.register-popup');

openModal.addEventListener('click', function () {
  modalWindow.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  modalWindow.style.display = 'none';
});

let config = {
  korisnicko_ime: {
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  register_email: {
    required: true,
    email: true,
    minlength: 5,
    maxlength: 50,
  },
  register_lozinka: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: 'ponovi_lozinku',
  },
  ponovi_lozinku: {
    required: true,
    minlength: 7,
    maxlength: 25,
    matching: 'register_lozinka',
  },
};

let validator = new Validator(config, '#registrationForm');

document.querySelector('#registrationForm').addEventListener('submit', (e) => {
  e.preventDefault();

  if (validator.validationPassed()) {
    let user = new User();
    user.username = document.querySelector('#korisnicko_ime').value;
    user.email = document.querySelector('#register_email').value;
    user.password = document.querySelector('#lozinka').value;
    user.create();
  } else {
    alert('Fields are not filled as expected');
  }
});

document.querySelector('#loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.querySelector('#login_email').value;
  let password = document.querySelector('#login_lozinka').value;

  let user = new User();
  user.email = email;
  user.password = password;
  user.login();
});
