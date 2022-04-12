// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
// по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.color');
const btnRefs = document.querySelector('button');

btnRefs.addEventListener('click', () => {
  const colorTextRefs = document.body.style.background = getRandomHexColor();
  changeColor.textContent = colorTextRefs;
})



