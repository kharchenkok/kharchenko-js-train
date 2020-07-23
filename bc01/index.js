// ============20-07-2020====module02==========================
// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// let styles = ['Джаз', 'Блюз']

// styles.push('Рок-н-ролл')

// styles[Math.round((styles.length-1)/2)] = 'Классика'

// // const deletadElem = styles.splice(0,1)
// // console.log(deletadElem);
// console.log(styles.shift())

// styles.unshift('Рэп','Регги')
// console.log(styles);
// ===============================================
// let arr = [5, 2, 1, -10, 8];

// const max = function () {
//     let newArr = [...arguments]
//     let maxNumb=0
//     for (let numb of newArr){
//         if (numb>maxNumb){
//             maxNumb=numb
//         }
//     }
//     console.log(maxNumb);
// }

// // console.log(max(1,2,3,4,5,6,7,8))
// max(1,2,3,4,5,6,7,8)
// ==========================21-07-2020=======функції==============================
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
// const ask = function(question, yes, no) {
//     confirm(question) ? yes() : no();
//   }

//   ask(
//     "Вы согласны?",
//     ()=> {alert("Вы согласились.")},
//     ()=> {alert("Вы отменили выполнение.")},
//   );

//   const hello = function(name='гость'){
//           return console.log(`Привет ${name}`)

//   }
//  hello()

// const repeatStr = function(str='',n=2){
// return  console.log(str.repeat(n));
// }

// const repeatStr = (str='',n=2) => console.log(str.repeat(n));

// repeatStr('hello')
// ========================================================================

// const checkForSpam = function (message) {
//   let result = false;
//   let arrMessage = message.toLowerCase().split(" ");
//   // console.log(arrMessage);
//   for (let i = 0; i < arrMessage.length; i += 1) {
//     // console.log(arrMessage[i]);
//     if (arrMessage[i].includes("spam" )|| arrMessage[i].includes("sale") ){
//       result = true;
//     }

//   }
//   return result
// };
// // console.log(checkForSpam("Latest technology news")); // false

// // console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); //true

// ==============================22-07-2020 об'єкти=========================================
// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

// let schedule = {};

// const isEmpty = (schedule)=>{
//   let keysArr = Object.keys(schedule)
//   if (keysArr.length === 0){
//     return true
//   }
//   return false
//   // for (let key in schedule){
//   //   if (key === "8:30"){
//   //     return false
//   //   }

// }
// // const isEmpty = (schedule)=>{

// //   if (schedule["8:30"]){
// //       return false
// //     }
// //     return true
// // }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// ===============================================================

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// // Если объект salaries пуст, то результат должен быть 0.
// let sum = 0
// const getTotalSum = (salaries)=>{
//   let salariesArr = Object.values(salaries)
//   for(let salary of salariesArr){
//     sum+=salary
//   }
//   return sum

// }
// console.log(getTotalSum (salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = function (obj) {
//   for (let key in obj){
//     if (typeof obj[key] === 'number'){
//       obj[key] *=2
//     }
//   }
//   return obj
// };

// console.log(multiplyNumeric(menu));
// =============================23-07-2020=======обєкти===============================
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// let user = {
//   name: "Петр",
//   surname: "Петров",
//   age: "20 лет",
// };

// let { name = "Аноном", surname = "Анонимович", age = "?лет" } = user;
// console.log(user);
// ===================================================================
// ! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// const FizzBuzz = function (n) {
//   for (let i = 1; i <= n; i += 1) {
//       if ((i % 3 === 0) && (i % 5 === 0)){
//           console.log("fizzbuzz")
//         } else if (i % 5 === 0){
//             console.log("buzz") 
//         }else if (i % 3 === 0){
//             console.log("fizz")
//         }else{
//         console.log(i);
//         }       
//   }
// };
// FizzBuzz(15);
// ====================================================================
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
read: function(...params){
    for (let i=0; i< params.length; i+=1){
        this[i] = params[i]
    }
// this.a=a
// this.b=b

},
sum: function(){
    let totalSum = 0
    for (let key in calculator){
        if (typeof calculator[key] === "number"){
            totalSum+=calculator[key]
        }
    }
    return totalSum
},
mul: function(){
    let sumOfMult=1
    for (let key in calculator){
        if (typeof calculator[key] === "number"){
            sumOfMult*=calculator[key]
        }
    }
    return sumOfMult
}
}

calculator.read(1,2,3,5);
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator);
