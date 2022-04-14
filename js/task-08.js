// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно
// до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів 
// в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням 
// властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.



const formInput = document.querySelector(".login-form");
formInput.addEventListener("submit", event => {
  event.preventDefault();

  const currentValue = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
  }

  if (currentValue.email === "" || currentValue.password === "") {
    return alert ("Please fill in all the fields!");
  }

  console.log (currentValue);
  event.currentTarget.reset();
});