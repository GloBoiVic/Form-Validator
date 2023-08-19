'use strict';
const registerForm = document.querySelector('.register-form');
const submitBtn = document.getElementById('submit-btn');
const submissionStatus = document.querySelector('.submission-status');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let isValidForm = validateInputValues();
	if (isValidForm) {
		submissionStatus.classList.add('successMessage');
		submissionStatus.textContent = 'Registration Succeeded';
	} else {
		submissionStatus.classList.add('errorMessage');
		submissionStatus.textContent = 'Registration Failed';
	}

	// setTimeout(() => {
	// 	submissionStatus.classList.remove('errorMessage', 'successMessage');
	// }, 1500);
});

function validateInputValues() {
	let inputValidationStatus = [];
	if (validateName(firstName.value)) {
		inputStatus(true, firstName);
		inputValidationStatus[0] = true;
	} else {
		inputStatus(false, firstName);
		inputValidationStatus[0] = false;
	}
	if (validateName(lastName.value)) {
		inputStatus(true, lastName);
		inputValidationStatus[1] = true;
	} else {
		inputStatus(false, lastName);
		inputValidationStatus[1] = false;
	}
	if (validateEmail(email.value)) {
		inputStatus(true, email);
		inputValidationStatus[2] = true;
	} else {
		inputStatus(false, email);
		inputValidationStatus[2] = false;
	}
	if (validatePhoneNumber(phoneNumber.value)) {
		inputStatus(true, phoneNumber);
		inputValidationStatus[3] = true;
	} else {
		inputStatus(false, phoneNumber);
		inputValidationStatus[3] = false;
	}
	if (validatePassword(password.value)) {
		inputStatus(true, password);
		inputValidationStatus[4] = true;
	} else {
		inputStatus(false, password);
		inputValidationStatus[4] = false;
	}

	if (
		confirmPassword.value.trim() !== '' &&
		validateConfirmPassword(password.value, confirmPassword.value)
	) {
		inputStatus(true, confirmPassword);
		inputValidationStatus[5] = true;
	} else {
		inputStatus(false, confirmPassword);
		inputValidationStatus[5] = false;
	}

	return inputValidationStatus.includes(false) ? false : true;
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

function inputStatus(status, input) {
	let inputGroup = input.parentElement;
	status
		? inputGroup.classList.add('success')
		: inputGroup.classList.add('error');

	// setTimeout(() => {
	// 	inputGroup.classList.remove('success', 'error');
	// }, 1500);
}
