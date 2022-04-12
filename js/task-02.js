// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію 
// у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map(ingridient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.append(ingridient);

  return ingredientItem;
});

const ingredientList = document.querySelector('#ingredients');
ingredientList.append(...ingredientsItem);

console.log (ingredientsItem);