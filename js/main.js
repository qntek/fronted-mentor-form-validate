const confirmBtn = document.getElementById('confirm-btn');
const numberError = document.querySelector('.error-cardnumber');
const inputNumberField = document.getElementById('cardnumber');
const cardNumberOnCardImage = document.querySelector('.card-front-number');
const cardHolderName = document.getElementById('cardholder-name');
const expMonth = document.getElementById('exp-month');
const expYear = document.getElementById('exp-year');

confirmBtn.addEventListener('click', confirmBtnHandler);
inputNumberField.addEventListener('input', liveNumberChange);
cardHolderName.addEventListener('input', liveNameChange);
expMonth.addEventListener('input', liveDateChange);
expYear.addEventListener('input', liveDateChange);

function confirmBtnHandler() {
	numberValidator();
	nameFieldValidate();
	dateValidate();
}

function numberValidator() {
	if (inputNumberField.value.toString().length === 16) {
		numberError.classList.add('off');
		inputNumberField.classList.remove('error-border');
		return true;
	} else {
		numberError.classList.remove('off');
		inputNumberField.classList.add('error-border');
		return false;
	}
}

function liveNumberChange() {
	inputNumberField.value = inputNumberField.value.replace(/\D/g, '');
	if (inputNumberField.classList.contains('error-border')) {
		inputNumberField.classList.remove('error-border');
		numberError.classList.add('off');
	}

	let currentValue = inputNumberField.value.padEnd(16, '0');

	cardNumberOnCardImage.textContent = `${currentValue.slice(
		0,
		4
	)} ${currentValue.slice(4, 8)} ${currentValue.slice(
		8,
		12
	)} ${currentValue.slice(12, 16)}`;
}

function liveNameChange() {
	const nameOnCardImage = document.querySelector('.card-front-cardholder-name');
    if (cardHolderName.value.length === 0) {
        document.querySelector('.error-cardholder').classList.add('off');
        cardHolderName.classList.remove('error-border');
    }
	nameOnCardImage.textContent = cardHolderName.value.toUpperCase();
    if (nameOnCardImage.textContent.includes(' ')) nameFieldValidate();
}

function nameFieldValidate() {
	const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	const name = cardHolderName.value;
	const nameError = document.querySelector('.error-cardholder');
	if (!regName.test(name)) {
		nameError.classList.remove('off');
		cardHolderName.classList.add('error-border');
	} else {
		nameError.classList.add('off');
		cardHolderName.classList.remove('error-border');
	}
}

function liveDateChange() {
	const onCardDateMonth = document.querySelector('.mm');
	const onCardDateYear = document.querySelector('.yy');

	expMonth.value = expMonth.value.replace(/\D/g, '');
	expYear.value = expYear.value.replace(/\D/g, '');

	if (expMonth.value.length > 2) {
		expMonth.value = expMonth.value.slice(0, 2);
	}
	if (expYear.value.length > 2) {
		expYear.value = expYear.value.slice(0, 2);
	}
	onCardDateMonth.textContent = expMonth.value.padStart(2, '0');
	onCardDateYear.textContent = expYear.value.padStart(2, '0');
	dateValidate();
}

function dateValidate() {
	const errorDate = document.querySelector('.error-date');
	if (
		expMonth.value === '00' ||
		!expMonth.value ||
		+expMonth.value < 1 ||
		+expMonth.value > 12
	) {
		expMonth.classList.add('error-border');
		errorDate.classList.remove('off');
	} else {
		expMonth.classList.remove('error-border');
		errorDate.classList.add('off');
	}
	let year = new Date().getFullYear().toString().slice(-2);
	if (!expYear.value || +expYear.value < +year || +expYear.value > (+year + 4)) {
		expYear.classList.add('error-border');
		errorDate.classList.remove('off');
	} else {
		expYear.classList.remove('error-border');
		errorDate.classList.add('off');
	}
}
