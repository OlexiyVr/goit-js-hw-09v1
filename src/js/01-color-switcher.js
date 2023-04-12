// Імпортування Бібліотеки
import getRandomHexColor from './RHC';

//Кнопки старт/стоп
const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
// values
let timerId = null;

// Додавання слухача
dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);

  dataStartRef.removeAttribute('disabled');
}


function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}