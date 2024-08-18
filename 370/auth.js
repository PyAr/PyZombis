// auth.js

function registerUser() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Store the new user in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Please log in.');
    window.location.href = '../scorm_package/login.html';
    return false;
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        if (rememberMe) {
            localStorage.setItem('loggedInUser', username);
        }
        sessionStorage.setItem('loggedInUser', username);
        alert('Login successful!');
        window.location.href = '../scorm_package/chapter1.html'; // Redirect to the first chapter
    } else {
        alert('Invalid username or password!');
    }
    return false;
}

function logoutUser() {
    sessionStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = '../scorm_package/login.html';
}

function checkLogin() {
    const loggedInUser = sessionStorage.getItem('loggedInUser') || localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('You are not logged in. Please log in first.');
        window.location.href = '../scorm_package/login.html';
    }
}

window.onload = checkLogin;
