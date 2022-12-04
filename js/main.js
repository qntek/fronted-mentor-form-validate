const confirmBtn = document.getElementById('confirm-btn');
const numberError = document.querySelector('.error-cardnumber');
const inputNumberField = document.getElementById('cardnumber');
const cardNumberOnCardImage = document.querySelector('.card-front-number');

confirmBtn.addEventListener('click', confirmBtnHandler);
inputNumberField.addEventListener('input', liveNumberChange);

function confirmBtnHandler() {
	numberValidator();
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
	inputNumberField.value = inputNumberField.value.replace(/\D/g,'');

	if (inputNumberField.classList.contains('error-border')) {
		inputNumberField.classList.remove('error-border');
		numberError.classList.add('off');
	}

	let currentValue = inputNumberField.value.padEnd(16, '0');

	if (currentValue.length > 16) {
		currentValue = currentValue.slice(0, 16);
        numberValidator();
	}
	cardNumberOnCardImage.textContent = `${currentValue.slice(
		0,
		4
	)} ${currentValue.slice(4, 8)} ${currentValue.slice(
		8,
		12
	)} ${currentValue.slice(12, 16)}`;
}
