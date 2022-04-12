// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector('input');
const textValidLength = textInput.getAttribute("data-length");
textInput.addEventListener("blur", () => {
    if (textInput.value.length !== Number(textValidLength)) {
        textInput.setAttribute('class', 'invalid');
    } else {textInput.setAttribute('class', 'valid');}
});
