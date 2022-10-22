const buttons = document.querySelectorAll('button');
const screen = document.querySelector('input');

let result = '';
let activeSign = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == 'DEL') {
      screen.value = screen.value.slice(0, -1);
    } else if (button.textContent == 'RESET') {
      screen.value = '';
      activeSign = '';
      result = '';
      screen.placeholder = result;
    } else if (button.className == 'func') {
      if (activeSign == '') activeSign = button.textContent;

      if (result === '') {
        result = screen.value;
        screen.value = '';
        screen.placeholder = result;
        activeSign = button.textContent;
      } else {
        count(result, activeSign, screen.value);
        screen.value = '';
        screen.placeholder = result;
        activeSign = button.textContent;
      }
    } else if (button.textContent == '=') {
      if (result == '') return;

      count(result, activeSign, screen.value);
      screen.value = '';
      screen.placeholder = result;
    } else {
      screen.value += button.textContent;
    }
  });
});

const count = (first, sign, second) => {
  switch (sign) {
    case '+':
      result = Number(Number(first) + Number(second));
      break;
    case 'x':
      if (second == '') return;

      result = Number(Number(first) * Number(second));
      break;
    case '-':
      result = Number(Number(first) - Number(second));
      break;
    case '/':
      if (second == '') return;
      result = Number(Number(first) / Number(second));
      break;
  }

  console.log(result);
};
