// const headerRef = document.querySelector('header')
// const navListRef = document.querySelector('.nav-list')
// const homeItemRef = document.getElementById('home')
// // const homeItemRef = document.querySelector('#home')
// const aboutItemRef = document.querySelector('[data-action="action"]')
// // const itemsRef = document.querySelectorAll('.item')
// const itemsRef = document.getElementsByClassName('item')

// console.log(itemsRef);
// console.dir(itemsRef);

// function toAddClassName(arr){
//     // for (const item of arr){
//     //     console.log('item',item)
//     //     item.classList.add('nav-item')
//     // }
//     arr.forEach(elem => {
//         elem.classList.add('nav-item')
//     });
// }

// toAddClassName(itemsRef)
// console.dir(itemsRef)

// const refs = {
//     form: document.querySelector('.form'),
//     loginInput: document.querySelector('.login'),
//     passwordInput: document.querySelector('.password'),
// }
// function toGetInput(event){
//     console.log(event.target.value);
//     console.log(event);

// }
// refs.form.addEventListener('input', toGetInput)
// ================================================================================
// const sum =a =>  b => console.log(a+b)

// sum(1)(2)
// sum(5)(-2)

// ====================================================================================
// 4) У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// Обычный способ был бы таким:

// // по имени (Ann, John, Pete)
// console.log(

//     users.sort((a, b) => a.name > b.name ? 1 : -1)
// );

// // по возрасту (Pete, Ann, John)
// console.log(

//     users.sort((a, b) => a.age > b.age ? 1 : -1)
// );
// Можем ли мы сделать его короче, скажем, вот таким?

// const byField = (elem) => (a, b) => a[elem] > b[elem] ? 1:-1 ;



// users.sort(byField("age"));
// console.log(users);

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// ====================================================================

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//       let num =i
//     let shooter = function() { // функция shooter
//         alert( num ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// =======================================================================
// let anim ={
//     jumps:null
// }
// let rabb = {
//     __proto__:anim,
//     jumps:true
// }
// alert (rabb.jumps) //true
// delete rabb.jumps
// alert (rabb.jumps) //null
// delete anim.jumps
// alert (rabb.jumps) // underfind
