const emailLabel = document.getElementById('emailLabel');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('displayUsername');
const usernameLabel = document.getElementById('usernameLabel');
const displayName = document.getElementById('displayName');
const passwordInput = document.getElementById('password');
const passwordLabel = document.getElementById('passwordLabel');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
const setError = (element, message) => {

}
const setSuccess = (element) => {

}
const validateEmail = () => {
    const emailValue = emailInput.value;
    if (emailValue == '' || emailValue == null) {
        emailLabel.innerHTML = 'email <span style="font-style:italic;font-size:12px;font-weight:400; text-transform: capitalize;color: hsl(358 calc(1 * 92.9%) 72.4% / 1);">- Required</span>';
        emailLabel.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
    } else {
        emailLabel.innerHTML = 'email <span>*</span>';
        emailLabel.style.color = 'hsl(215 calc(1 * 8.8%) 73.3% / 1';
    }
}
const validateUsername = () => {
    const usernameValue = usernameInput.value;
    const additionalElement = document.querySelector('#additionalElement2');
    if (usernameValue === '' || usernameValue == null) {
        usernameLabel.innerHTML = 'username <span style="font-style:italic;font-size:12px;font-weight:400; text-transform: capitalize;color: hsl(358 calc(1 * 92.9%) 72.4% / 1);">- Required</span>';
        usernameLabel.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
        additionalElement.innerHTML = '';
    } else if (usernameValue.length < 2 || usernameValue.length > 32) {
        usernameLabel.innerHTML = 'username <span>*</span>';
        usernameLabel.style.color = 'hsl(215 calc(1 * 8.8%) 73.3% / 1';
        additionalElement.innerHTML = 'This must be between 2 and 32 characters';
        additionalElement.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
    } else if (!usernameValue.match(/^[a-zA-Z0-9_.]+$/g)) {
        usernameLabel.innerHTML = 'username <span style="font-style:italic;font-size:12px;font-weight:400; text-transform: capitalize;color: hsl(358 calc(1 * 92.9%) 72.4% / 1);">- Required</span>';
        usernameLabel.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
        additionalElement.innerHTML = 'Please only use numbers, letters, underscores _ , and periods.';
        additionalElement.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
    } else {
        usernameLabel.innerHTML = 'username <span>*</span>';
        usernameLabel.style.color = 'hsl(215 calc(1 * 8.8%) 73.3% / 1';
        additionalElement.innerHTML = 'Username is available. Nice!';
        additionalElement.style.color = 'hsl(146 calc(1 * 63.1%) 47.8% / 1)';
    }
}

const validatePassword = () => {
    const passwordValue = passwordInput.value;
    const passCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passwordValue == '' || passwordValue == null) {
        passwordLabel.innerHTML = 'password <span style="font-style:italic;font-size:12px;font-weight:400; text-transform: capitalize;color: hsl(358 calc(1 * 92.9%) 72.4% / 1);">- Required</span>';
        passwordLabel.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
    } else if (!passwordValue.match(passCheck)) {
        passwordLabel.innerHTML = 'password <span style="font-style:italic;font-size:12px;font-weight:400; text-transform: capitalize;color: hsl(358 calc(1 * 92.9%) 72.4% / 1);">- Must be at least 8 characters long.</span>';
        passwordLabel.style.color = 'hsl(358 calc(1 * 92.9%) 72.4% / 1)';
    } else {
        passwordLabel.innerHTML = 'password <span>*</span>';
        passwordLabel.style.color = 'hsl(215 calc(1 * 8.8%) 73.3% / 1';
    }
}
// const showAdditionalText = (input, message = 'This is how others see you. You can use special characters and emoji.') => {
//     const targetId = input.getAttribute('data-target');
//     const additionalText = document.getElementById(targetId);
//     if (additionalText.innerText !== 'This must be between 2 and 32 characters') {
//         additionalText.innerText = message;
//         additionalText.style.opacity = '1';
//         additionalText.style.position = 'relative';
//     }
// }

// const hideAdditionalText = (input) => {
//     const targetId = input.getAttribute('data-target');
//     const additionalText = document.getElementById(targetId);

//     if (additionalText.innerText !== 'This must be between 2 and 32 characters') {
//         additionalText.style.opacity = '0';
//         additionalText.style.position = 'absolute';
//     }
// }

// displayName.addEventListener('focus', () => {
//     showAdditionalText(displayName);
// });
// displayName.addEventListener('blur', () => {
//     hideAdditionalText(displayName);
// });

// usernameInput.addEventListener('focus', () => {
//     showAdditionalText(usernameInput, 'Please only use numbers, letters, underscores _ , or periods.');
// });
// usernameInput.addEventListener('blur', () => {
//     hideAdditionalText(usernameInput);
// });

usernameInput.addEventListener('keyup', () => {
    validateUsername();
})