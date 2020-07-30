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

// let calculator = {
// read: function(...params){
//     for (let i=0; i< params.length; i+=1){
//         this[i] = params[i]
//     }
// // this.a=a
// // this.b=b

// },
// sum: function(){
//     let totalSum = 0
//     for (let key in calculator){
//         if (typeof calculator[key] === "number"){
//             totalSum+=calculator[key]
//         }
//     }
//     return totalSum
// },
// mul: function(){
//     let sumOfMult=1
//     for (let key in calculator){
//         if (typeof calculator[key] === "number"){
//             sumOfMult*=calculator[key]
//         }
//     }
//     return sumOfMult
// }
// }

// calculator.read(1,2,3,5);
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);

// ==============================модуль 4 Репета==============================
// const bar = function() {
//     console.log('bar');
//   };

//   const baz = function() {
//     console.log('baz');
//   };

//   const foo = function() {
//     console.log('foo');
//     bar();
//     baz();
//   };

//   foo();

// =============================
//   const makeSheff = function(name){
//       return function(dish){
//           console.log(`${name} готує ${dish}`);
//       }
//   }
//   const mango = makeSheff('Mango')
//   const poly = makeSheff('Poly')
// console.dir(mango);
//   mango('котлети')
//   poly('чай')
// =============================27-07-2020======= =============================

// let storeStatistics = {
//   tshirtsSold: 0,
//   jasketsSold: 0,
//   socksSold: 0,
// };

// const SellSomething = function (color, size, type, quantity) {
//   this.color = color;
//   this.size = size;
//   this.type = type;
//   this.quantity = quantity;
//   this.userOrder = function () {
//     console.log(
//       `User order: goods - "${type}", quantity - ${quantity}, size - ${size}, color - ${color}`
//     );
//   };

//   this.orderStatistics = function () {
//     if (Object.keys(storeStatistics).includes(this.type)) {
//       storeStatistics[this.type] += this.quantity;
//     }
//     return console.log(storeStatistics);
//   };
// };

// let tshirtsOrder = new SellSomething("black", "L", "tshirtsSold", 2);
// let jasketsOrder = new SellSomething("white", "M", "jasketsSold", 7);
// let socksOrder = new SellSomething("blue", "S", "socksSold", 5);
// tshirtsOrder.userOrder();
// jasketsOrder.userOrder();
// socksOrder.userOrder();
// tshirtsOrder.orderStatistics();
// jasketsOrder.orderStatistics();
// socksOrder.orderStatistics();
// ===============================================28/07/2020============================

// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// 5)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].// const a = [1, 2, 3, 4, 5];
// let arrA = ["a", "b", "c"];
// let arrB = [1, 2, 3];
// let arrAB = arrA.concat(arrB);
// console.log(arrAB);

// let arrD = ["a", "b", "c"];
// let arrC = arrD.push(1, 2, 3);
// console.log(arrD);
// console.log(arrC);

// let arrE = [1, 2, 3];
// let arrL = arrE.reverse(arrE);
// console.log(arrL);

// let arrM = [1, 2, 3, 4, 5];
// let arrK = arrM.slice(0, 3);
// console.log(arrK);

// let arrP = [1, 2, 3, 4, 5];
// let arrT = arrP.splice(1, 2);
// console.log(arrT);
// console.log(arrP);

// 1) Вибираємо випадкове число (від 0 до довжини масива);
// const a = [1, 2, 3, 4, 5];
// let b = Math.round(Math.random()*(a.length-1)+1);
// console.log(a[b]);
// console.log(a[b]);
// console.log(a[b]);
// console.log(a[b]);
// console.log(a[b]);
// console.log(a[b]);

// 2)// -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки

// let str = prompt('your string')
// let strArr = str.split(' ')
// console.log(strArr);
// let revArr = strArr.reverse(strArr)
// console.log(revArr);
// let revArrStr = revArr.join(' ')
// console.log(revArrStr);

// ========================================29-07-2020==========================

// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log("There is a billions types of creatures all around the world!");
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }
// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }

// class Animal extends Creature{
//     constructor (name, color, chainClass, type, planet){
//         super (type, planet)
//         this.name = name
//         this.color = color
//         this.chainClass = chainClass
//     }
//     addToCreaturesList() {
//         creaturesArr.push({
//           name: this.name,
//           planet: this.planet,
//           type:this.type,
//           chainClass:this.chainClass
//         });
//       }
// }

// // let cat = new Animal('Murzik', 'black', 'meat-eating', 'animal', 'Earth', "three-dimensional", "male"  )
// let cat = new Animal('Murzik', 'black', 'meat-eating', 'animal', 'Earth')
// cat.addToCreaturesList()
// // Creature.checkCreatures();
// let Adam = new Human(
//   "Adam",
//   "human",
//   "Mars",
//   "three-dimensional",
//   "male",
//   "Ukrainian"
// );
// Adam.addToCreaturesList();
// let Eva = new Human(
//   "Eva",
//   "human",
//   "Venus",
//   "three-dimensional",
//   "female",
//   "Ukrainian"
// );
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// =============================================================================
// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// class User {
//   constructor(name, surname, nick = "defolt") {
//     this.name = name;
//     this.surname = surname;
//     this.nick = nick;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     let currentYear = new Date().getFullYear();
//     let currentCourse = currentYear - this.year;
//     return currentCourse;
//   }
// }
// // Вот так должен работать наш класс:
// let student = new Student("Иван", "Иванов", 2017);
// console.log(student.nick); //выведет 'Иван'
// // console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// console.log(student.getCourse());
// // student.getCourse();

// ====================================30-07-2020==========================================

// // Создать масив в котором запишется каждый элемент исходного масива *2;
// const numbers = [1, 2, 3, 4, 5];
// // const calculateNumbs = numbers.map(num => num*2)
// const calculateNumbs = numbers.map(num => num*2)
// console.log(calculateNumbs);
// // 2)Создать масив в котором поочерёдно перечисляется длина элементов исходного масиваж
// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const newArr = arr.map(elem =>elem.length)
// console.log(newArr);

// // 3)Посчитайте все лайки пользователей
// const tweets = [
//        { id: "000", likes: 5, tags: ["js", "nodejs"] },
//        { id: "001", likes: 2, tags: ["html", "css"] },
//        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//        { id: "003", likes: 8, tags: ["css", "react"] },
//        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//      ];

//      const getTotalLikes = tweets.reduce((acc, tweet) =>{
//     acc+= tweet.likes
// return acc
//      },0)

//      console.log(getTotalLikes);
// // 4)Найдите все обьекты у которых есть тег 'js'(массив tweets);

// const getJsTags = tweets.filter(tweet=>
//     tweet.tags.includes('js')
// )
// console.log(getJsTags);

// 5) Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
// const getTotalSum = function(...numbers){

//     let total = numbers.reduce((acc,number) =>{
//         if(!(number%2)){
//             acc+=number
//         }
//         return acc
//         },0)
//         return total
// }
// console.log(getTotalSum(1,2,3,4,5));


// 6)Отсортируйте масив по возрасту юзеров;
// let items = [
//   {name: "Миша", age: 23},
//   {name: "Вася", age: 44},
//   {name: "Саша", age: 2},
//   {name: "Рома", age: 99},
//   {name: "Ашот", age: 19}
// ];

// console.table(items.sort((a,b) => a.age-b.age))


// // 7) Замените каждый елемент массива на 0; (Метод fill)
// let x = [1, 2, 3, "a", "b", "c"];
// console.log(x.fill(0));

// // 8) Проверьте есть ли хотя бы один элемент больше 30? Верните true/false
//  const arr = [10, 20, 30, 40];
//  console.log(arr.some(numb => numb>30));
// // 9) Найдите короля района
// let items = [
//   {name: "Миша", age: 23 , isTheKingOfNeighbourhood: false},
//   {name: "Вася", age: 44 , isTheKingOfNeighbourhood: false},
//   {name: "Саша", age: 2 , isTheKingOfNeighbourhood: false},
//   {name: "Рома", age: 99 , isTheKingOfNeighbourhood: false},
//   {name: "Ашот", age: 19 , isTheKingOfNeighbourhood: true}
// ]

//   console.log(items.find(item => item.isTheKingOfNeighbourhood));

// Поменяйте статус юзера на "неактивен", если daysInactive больше 10;
//   const users = [
//     { name: "Mango", daysInactive: 10, isActive: true },
//     { name: "Poly", daysInactive: 5, isActive: true },
//     { name: "Ajax", daysInactive: 12, isActive: true }
//   ];
 
//   const inactiveUsers = users.map(user =>{
//       if (user.daysInactive >10){
//           user.isActive = false
//       }
//       return user
//   })
//   console.log(inactiveUsers);
// 11) Создайте ф-цию которая принимает строку и возвращает её записанную "Заборчиком" (ПрИвЕт)

// let newStrArr = function(string){
//     let strArr = string.split('')
//     let arr = strArr.map(str =>{
//         if(!(strArr.indexOf(str)%2)){
//             return str.toUpperCase()
//         }
//         return str
//     })
//     return arr.join('')
// }

// console.log(newStrArr('привет ghbdrn'));