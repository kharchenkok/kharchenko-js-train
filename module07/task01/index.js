// В HTML есть список категорий ul#categories.


// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('#categories')
console.log(`В списку ${categories.querySelectorAll('.item').length} категорії`);

const items = document.querySelectorAll('.item')
console.log(categories);
console.log(items.length);

const itemsArr = items.forEach(item =>{
console.log(`Категорія: ${item.querySelector('h2').textContent}`)
console.log(`Кількість елементів: ${item.querySelector('ul').children.length}`)

})