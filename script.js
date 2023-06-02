// // Navigation
// const projects = document.querySelector(".projects");
// const aboutMe = document.querySelector(".about_me");
// const contactMe = document.querySelector(".contact_me");





// Validate contact form
const inputname = document.querySelector("#name");
const nameError = document.querySelector("#name_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject_error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message_error");
const submitButton = document.querySelector("#submit_contact");
// const submitSuccess = document.querySelector(".submit_success");
const form = document.querySelector("form");
// submitSuccess.style.display = "none";

submitButton.onclick = function validateContact(event) {
    event.preventDefault();
    validateName(inputname);
    validateEmail(email);
    validateSubject(subject);
    validateMessage(message);

    // if (validateName(inputname) &&  validateEmail(email) && validateSubject(subject) && validateMessage(message)) {
    //     form.reset();
    //     submitSuccess.style.display = "block";
    //     form.style.display = "none";
    // }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}
function validateName(inputname) {
    if (checkLength(inputname.value, 4) === true) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        return false;
    }
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email.value);
    if (patternMatches === true) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        return false;
    }
}

function validateSubject(subject) {
    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
        return true;
    } else {
        subjectError.style.display = "block";
        return false;
    }
}
function validateMessage(message) {
    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
        return true;
    } else {
        messageError.style.display = "block";
        return false;
    }
}

