let full_name = prompt ("What is your Full Name")
while (validateFullname(full_name) == false){
    full_name = prompt ("Incomplete name or wrong format! Please enter your full name again")
}

let email = prompt("Enter your Email Address")
while (validateEmail(email) == false){
    email = prompt("Invalid email! Please enter your email address again")
}

let password = prompt ("Enter your Password")
while (validatePassword(password) == false){
    password = prompt ("Password must be at least 8 characters, with one uppercase letter, one number, and one special character.")
}

let confirm_password = prompt ("Please confirm Password")
while (validateConfirmPassword(confirm_password) == false){
    confirm_password = prompt ("Password mismatch! Please confirm password again")
}

let age = prompt ("Enter your Age")
while (validateAge(age) == false){
    age = alert ("You've not met the required age limit! Try again when you're up to 18")
}



function validateAge(age){
    if (age < 18){
        return false
    } else {
        alert("Congratulations, You're in")
    }
}

function validateConfirmPassword(confirm_password){
    if (confirm_password == password){
        return true
    } else {
        return false
    }
}

function validatePassword(password){
    let testPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (testPassword.test(password)){
        return true
    } else {
        return false
    }
}

function validateEmail(email){
    let testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (testEmail.test(email)){
        return true
    } else {
        return false
    }
}

function validateFullname(full_name){
    if (full_name == null){
        return false
    }
    let checkName = full_name.trim().split(/\s+/);
    if (checkName.length < 2){
        return false
    } else {
        return true
    }
}




