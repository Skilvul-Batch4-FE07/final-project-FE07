const apiUrl = 'https://6450b0c5a3221969114f68c0.mockapi.io/api/loginRegister/users';
const isLoggedIn = localStorage.getItem('isLoggedIn');

function isEmailRegistered(email) {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(users => users.some(user => user.email === email));
}

function registerUser(fullname, name, email, password) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname,
      name,
      email,
      password
    })
  });
}

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const fullname = document.getElementById('register-fullname').value;
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  isEmailRegistered(email)
    .then(emailRegistered => {
      if (emailRegistered) {
        alert('Email is already registered');
      } else {
        registerUser(fullname, name, email, password)
          .then(response => {
            if (response.ok) {
              window.location.href = "login.html";
              alert('Registration successful');
              registerForm.reset();
              showNavbar()

            } else {
              alert('Registration failed');
            }
          })
          .catch(error => console.error(error));
      }
    })
    .catch(error => console.error(error));
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('isLoggedIn', 'true'); // simpan status login user
        window.location.href = "index.html";
        alert(`Welcome, ${user.email}!`);
        loginForm.reset();
      } else {
        alert('Invalid email or password');
      }
    })
    .catch(error => console.error(error));
});

$(document).ready(function () {
  $('#show-register-form').click(function () {
    $('#login-form-container').hide();
    $('#register-form-container').show();
  });
});

$(document).ready(function () {
  $('#show-login-form').click(function () {
    $('#login-form-container').show();
    $('#register-form-container').hide();
  });
});