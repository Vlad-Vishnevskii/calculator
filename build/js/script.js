const calc = document.querySelector('.calc');
const calcOutput = document.querySelector('.calc__output');
let numberClickCounter = 0;
let arithmeticClickCounter = 0;
let onSumButtonClickCounter = 0;
let arithmeticResult = 0;
let typeOffOperation = '';

const onButtonClearClick = function (target) {
  if (target.classList.contains('calc__button_clear')) {
    calcOutput.textContent = 0;
    numberClickCounter = 0;
    arithmeticClickCounter = 0;
    arithmeticResult = 0;
  }
}

const onButtonNumberClick = function (target) {
  if (target.classList.contains('calc__button_number')) {
    numberClickCounter += 1;
    if (numberClickCounter === 1) {
      calcOutput.textContent = target.textContent;
    } else {
      calcOutput.textContent += target.textContent;
    }
  }
}

const summation = function () {
  arithmeticResult += Number(calcOutput.textContent);
}

const subtraction = function () {
  arithmeticResult -= Number(calcOutput.textContent);
}

const onSumButtonClick = function (target) {
  if (target.classList.contains('calc__button_sum')) {
    onSumButtonClickCounter += 1;
    typeOffOperation = '+';
    if (arithmeticClickCounter <= 1) {
      arithmeticResult = Number(calcOutput.textContent);
    } else {
      arithmeticResult += Number(calcOutput.textContent);
      calcOutput.textContent = arithmeticResult;
    }
  }
}

const onSubtractionButtonClick = function (target) {
  if (target.classList.contains('calc__button_subtraction')) {
    typeOffOperation = '-';
    if (arithmeticClickCounter <= 1) {
      arithmeticResult = Number(calcOutput.textContent);
    } else {
      arithmeticResult -= Number(calcOutput.textContent);
      calcOutput.textContent = arithmeticResult;
    }
  }
}

const onArithmeticButtonClick = function (target) {
  if (target.classList.contains('calc__button_arithmetic') && numberClickCounter > 0) {
    arithmeticClickCounter += 1;
    numberClickCounter = 0;
    onSumButtonClick(target);
    onSubtractionButtonClick(target);
  }
}

const onButtonEqualsClick = function (target) {
  if (target.classList.contains('calc__button_equal')) {
    if (typeOffOperation === '+') {
      summation();
    }
    if (typeOffOperation === '-') {
      subtraction();
    }
    calcOutput.textContent = arithmeticResult;
  }
}

const onButtonClick = function (evt) {
  const target = evt.target;
  onButtonNumberClick(target);
  onButtonClearClick(target);
  onArithmeticButtonClick(target);
  onButtonEqualsClick(target);
}

calc.addEventListener('click',onButtonClick);
