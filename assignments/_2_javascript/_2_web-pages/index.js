const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loginForm = document.getElementById('login-form');
const errUsername = document.getElementById('err-username');
const errPassword = document.getElementById('err-password');

loginBtn.addEventListener('click', (e) => {
    if (validateUsername(username.value) && validatePassword(password.value)) {
        alert(`Hello ${username.value}\nYour password is ${password.value}`);
    }
})

const validateUsername = (u) => {
    const errors = [];
    if (u.length < 5) {
        errors.push("Your username must be at least 5 characters long")
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}

const validatePassword = (p) => {
    const errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters long"); 
    }
    if (p.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one lowercase letter.");
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one uppercase letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}

