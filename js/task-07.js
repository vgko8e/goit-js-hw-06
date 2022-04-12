// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeInput = document.querySelector('#font-size-control');
const textSizeInput = document.querySelector('#text');
textSizeInput.style.fontSize = sizeInput.value + 'px';

sizeInput.addEventListener('input', (event) => {
    textSizeInput.style.fontSize = event.target.value + 'px'});
