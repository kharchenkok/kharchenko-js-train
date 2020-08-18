// Напишите функцию camelize(str), 
// которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// let camelize = "background-color"
// console.log(camelize.indexOf('-'));
// // console.log(camelize.slice(10,1,1));
// let arr = camelize.split('-');
// console.log(arr);
// let w = arr[1]
let arr = [1, "от", 2,3,4,5,6,7,8,9,"до",10]
let newArr = arr.filter(elem => {
    if (typeof elem !== "number"){
        console.log();
    }
})