const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');


let expression = '';
function updateInputBox() {
  input.value = expression;
}
function calculateResult() {
  try {
    const result = eval(expression);
    expression = String(result);
  } catch (error) {
    expression = 'Error';
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === '=') {
      calculateResult();
      updateInputBox();
    } else if (buttonText === 'AC') {
      expression = '';
      updateInputBox();
    } else if (buttonText === 'DEL') {
      expression = expression.slice(0, -1);
      updateInputBox();
    } else {
      expression += buttonText;
      updateInputBox();
    }
  });
});
