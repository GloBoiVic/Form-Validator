'use strict';

const registerForm = document.querySelector('.register-form');
const submitBtn = document.getElementById('submit-btn');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const allInputs = document.querySelectorAll('.form-control');
console.log(allInputs);
// const message = document.getElementById('message');

function isRequired(value) {
	return value === '' ? false : true;
}

function validateName(name) {
	const nameRegex = /^[A-Za-z]+$/;
	return nameRegex.test(name);
}

function validateEmail(email) {
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return emailRegex.test(email);
}

function validatePhoneNumber(number) {
	const phoneRegex =
		/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

	return phoneRegex.test(number);
}

function validatePassword(password) {
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	return passwordRegex.test(password);
}

function validateConfirmPassword(password, confirmPassword) {
	return password === confirmPassword;
}

// function inputStatus(status, input) {
// 	let inputGroup = input.parentElement;
// 	status
// 		? inputGroup.classList.add('success')
// 		: inputGroup.classList.add('error');

// 	// setTimeout(() => {
// 	// 	inputGroup.classList.remove('success', 'error');
// 	// }, 1500);
// }

function isValidFirstName() {
	let valid = false;
	const message = firstName.parentElement.nextElementSibling;
	if (!isRequired(firstName.value)) {
		message.textContent = 'First Name cannot be blank';
		firstName.parentElement.classList.add('error');
	} else if (!validateName(firstName.value)) {
		message.textContent = 'Enter a valid first name';
		firstName.parentElement.classList.add('error');
	} else {
		message.textContent = '';
		valid = true;
		firstName.parentElement.classList.add('success');
	}
	return valid;
}

function isValidLastName() {
	let valid = false;
	const message = lastName.parentElement.nextElementSibling;
	if (!isRequired(lastName.value)) {
		message.textContent = 'Last Name cannot be blank';
		lastName.parentElement.classList.add('error');
	} else if (!validateName(lastName.value)) {
		message.textContent = 'Enter a valid last name';
		lastName.parentElement.classList.add('error');
	} else {
		message.textContent = '';
		valid = true;
		lastName.parentElement.classList.add('success');
	}
	return valid;
}

function isValidEmail() {
	let valid = false;
	const message = email.parentElement.nextElementSibling;
	if (!isRequired(email.value)) {
		message.textContent = 'Email cannot be blank';
		email.parentElement.classList.add('error');
	} else if (!validateEmail(email.value)) {
		message.textContent = 'Enter a valid email';
		email.parentElement.classList.add('error');
	} else {
		message.textContent = '';
		valid = true;
		email.parentElement.classList.add('success');
	}
	return valid;
}

function isValidPhoneNumber() {
	let valid = false;
	const message = phoneNumber.parentElement.nextElementSibling;
	if (!isRequired(phoneNumber.value)) {
		message.textContent = 'Phone Number cannot be blank';
		phoneNumber.parentElement.classList.add('error');
	} else if (!isValidPhoneNumber(phoneNumber.value)) {
		message.textContent = 'Enter a valid phone number';
		phoneNumber.parentElement.classList.add('error');
	} else {
		message.textContent = '';
		valid = true;
		phoneNumber.parentElement.classList.add('success');
	}
	return valid;
}

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	isValidFirstName();
	isValidLastName();
	isValidEmail();
	isValidPhoneNumber();
});
// function removeMessage(element) {
// 	setTimeout(() => {
// 		element.parentElement.nextElementSibling.textContent = '';
// 		element.parentElement.classList.remove('success', 'error');
// 	}, 1500);
// }

allInputs.forEach((input) => {
	input.addEventListener('focus', (e) => {
		e.currentTarget.parentElement.nextElementSibling.textContent = '';
		e.currentTarget.parentElement.classList.remove('success', 'error');
	});
});
