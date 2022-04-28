// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputform = document.querySelector('#name-input');
const outputform = document.querySelector('#name-output');

inputform.addEventListener("input", (event) => {
    if (inputform.value.trim() === '') {
        outputform.textContent = "Anonymous";}
        else {outputform.textContent = event.currentTarget.value;}
    ;
});