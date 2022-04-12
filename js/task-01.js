//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, 
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>) 
//і кількість елементів в категорії (усіх <li>, вкладених в нього).
//В результаті, в консолі будуть виведені наступні повідомлення.

const itemsRefs = document.querySelectorAll('.item');
console.log (`Number of categories: ${itemsRefs.length}`);

itemsRefs.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})





