// let number1=5;
// console.log(number1);
// let number2=10;
// console.log(number2)
// let sum =number1+number2
// console.log(sum)
//==============================================масиви==============================================================

// const peoples = ['Mango','Kiwi', 'Poly', 'Alex'];
// // people[2] = 'Kat';
// peoples[4]='Kost';
// // console.log(people);
// // console.log(people[3]);
// // console.log(people.length);

// for(let i=0; i<peoples.length; i +=1){
//     console.log(i);
//     console.log(peoples[i]);
// };
// for(const people of peoples){
//     console.log(people);
// }
// =========break-and-continue============================
// const peoples = ['Mango','Kiwi', 'Poly','Kostya','Alex']; //масив/колекція даних
// const nameToFind='Kostya'; //імя яке шукаємо
// let message ='не знайшли таку людину';

// for (let i = 0; i < peoples.length; i+=1) { //якщо потрібний счетчик
//     const people = peoples[i];
//     if (nameToFind===people) {
//         console.log('знайшли таку людину');
//     }
    
// }

// for(const people of peoples){   //якщо счетчик не потрібний
    // if (nameToFind===people){
        // message='знайшли таку людину';
        // break;
    // }else{ //можна не писати - в даному випадку елзе не потрібно
    //     message='не знайшли таку людину';
    // }
    //message='не знайшли таку людину'; //при застосуванні підходу від зворотнього, дане значення месседжу можна присвоїти відразу на 26 рядку
// }
// console.log(message);

// const numbers=[1,3,18,28,16,5,30,51,2,8,10,11,17,18];
// const threshold=7;
// for(let i=0; i<numbers.length; i+=1){
//     if (numbers[i]<threshold){
//         continue;
//     }
//     console.log(`Числo, більшe чим ${threshold}: ${numbers[i]}`);
// }

// ===============================багатомірні масиви - матриці======================

// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix);
// console.log(matrix[0][0]);//1
// console.log(matrix[1][1]);//5
// console.log(matrix[2][1]);//8

// let total=0;
// for (let i = 0; i < matrix.length; i+=1) {
//     console.log('Підмасив матриці matrix[i]:', matrix[i]);
//     for (let j=0; j<matrix[i].length; j+=1){
//         console.log('Елемент підмасивуматриці matrix[i][j]:', matrix[i][j]);
//         total+=matrix[i][j];
//     }
// }
// console.log(total);//45

// ============збираємо ввід користувача і щось з ним робимо=====================
// const valueInputRef = document.querySelector('.js-value');
// const addValueBtn= document.querySelector('.js-add-value');
// const calcBtn= document.querySelector('.js-calculate');
// const numbers=[];
// let total=0;

// addValueBtn.addEventListener('click', function(){
// const value = Number(valueInputRef.value);
// numbers.push(value);
// valueInputRef.value ='';
// console.log(numbers);

// });

// calcBtn.addEventListener('click', function() {
// for (const number of numbers){
//     console.log(number);
//     total += number;
// }
// console.log(total);
// });
// ==============================================17-06-20-робота на уроці -масиви/функції======================================================================
// const students =['Alex', 'Nikita', 'Boris'];
// const alex = students[0];
// console.log(alex);
// =================================repeta-vebinar-function-17-06-2020=========================================================================
// const add=function (a,b) {
//     console.log('a', a);
//     console.log('b', b);

//     // return 100;

//     const result=a+b;
    
//     return result;
    
// };

// const r1=add(2,5);
// console.log(r1);
// const r2=add(4,6);
// console.log(r2);
// const r3=add(1,15);
// console.log(r3);
// const r4=add(21,55);
// console.log(r4);

// example-1================================================
// const friends=['Mango','Kiwi','Poly','Alax'];
// // for (const friend of friends){
// //     console.log(friend);
// // }
// const numbers=[1,2,3,4];
//     // for (const number of numbers){
//     //     console.log(number);
//     // }
// const logItems=function (items) {
//     for(const item of items){
//         console.log(item);

//     }
// }
// logItems(friends);
// logItems(numbers);

// функція для пошуку друзів===================================
// const friends=['Mango','Kiwi','Poly','Alax'];
// const nameToFind='Poly';
// // let message = 'такого друга нет';
// // for (let friend of friends){
// //     if (nameToFind===friend){
// //         message='знайшли такого друга';
// //         break;
// //     }
// // }
// // console.log(message);

// const findFriend=function(allFriends, name){
//     console.log(allFriends);
//     console.log(name);

//     for (const friend of allFriends){
//             if (name===friend){
//                 return 'friend is find';
//             };

//         }
//         return 'friend is not find';
// };
// const r1=findFriend(friends,'Poly');
// console.log(r1);
// const r2= findFriend(friends,'Kost');
// console.log(r2);

// example-3================================================
// const title= 'Top 10 benefits of React framework';
// // console.log(title);

// const words = title.toLowerCase().split(' ');

// const slug =words.join('-');
// // console.log(slug);

// const slugify =function(string){
//     const words = string.toLowerCase().split(' ');
//     const slug =words.join('-');
//     console.log(words);
//     return slug
// }
// slugify(title)
// ==============================урок 18-06-20-функції==========================

// const users = ["Alex", "Boris", "Nikita", "Nikita", "Nikita", "Borya", "Boryan", "Nikita"];

// const result = [];

//  for (const user of users) {
//     const arrayFromUser = [users.indexOf(user), user];
//     result.push(arrayFromUser)
// }
// console.log(result)

// -------------------------------
// let i = 0;
// for (const user of users) {
//     const arrayFromUser = [i, user];
//     result.push(arrayFromUser);
//     i += 1
// }
// console.log(result)

// // ----------------------------------
// for (let i = 0; i < users.length; i += 1) {
//     const arrayFromUser = [i, users[i]];
//     result.push(arrayFromUser)
// }
// console.log(result)

// [[0,"Alex"], [1,"Boris"]]

// ===============home-task-repeat-train========================================================================================================
// ====================================================module01=====================================
// =====task-1=============
// let name ='Генератор защитного поля'
// let price=1000
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов'`)
// price=2000
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов'`)
// ==========task-2============
// ======ex1=============
// const total = 100;
// const ordered = 30;
// if(total>=ordered){
//     console.log('Заказ оформлен, с вами свяжется менеджер')
// }else{
//     console.log('На складе недостаточно твоаров!')
// }
// ==========ex2==========
// const total=100;
// let ordered =prompt('введіть кількість замовлення')
// if(isNaN(ordered)){
//     console.log('введіть число');
    
// }else if(total>=ordered){
//     console.log('Заказ оформлен, с вами свяжется менеджер')
// }else{
//     console.log('На складе недостаточно твоаров!')
// }
// ============task-3================
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// let inputPass=prompt('введіть ваш пароль');
// if(inputPass!==null){
//     if(inputPass===ADMIN_PASSWORD){
//         message='Добро пожаловать!';
//         alert(message);
        
//     } else{
//         message='Доступ запрещен, неверный пароль!'
//         alert(message);
//     }
    
// }else{
//     console.log('Отменено пользователем!');
    
// }
// =============task-4=======================
// let credits=23580;
// let pricePerDroid=3000;
// let inputNumberDroid=prompt('сколько дроидов вы хотите купить?')
// let totalPrice=inputNumberDroid*pricePerDroid
// if (inputNumberDroid!==null){
//     if(isNaN(inputNumberDroid)){
//         alert('введіть число');
//     }else if(totalPrice<=credits){
//         let lastCredits=credits-totalPrice;
//         alert(`ви купили ${inputNumberDroid}. На вашому рахунку ${lastCredits} `);
//     }else{
//         alert('Недостаточно средств на счету')
//     }

// }else{
//     console.log('Отменено пользователем!');    
// }
// =============task-5=======================
// let inputCountry=prompt('введите свою страну')
// let deliveryPrice=0
// if(inputCountry!==null){
//     if(isNaN(inputCountry)){
//     switch(inputCountry.toLowerCase()){
//         case 'китай':
//             deliveryPrice=100;
//             alert(`Доставка в ${inputCountry} буде коштувати ${deliveryPrice} кредитів`);
//             break;
//         case 'чили':
//             deliveryPrice=250;
//             alert(`Доставка в ${inputCountry} буде коштувати ${deliveryPrice} кредитів`);
//             break;
//         case 'австралия':
//             deliveryPrice=170;
//             alert(`Доставка в ${inputCountry} буде коштувати ${deliveryPrice} кредитів`);
//             break;
//         case 'индия':
//             deliveryPrice=80;
//             alert(`Доставка в ${inputCountry} буде коштувати ${deliveryPrice} кредитів`);
//             break;
//         case 'ямайка':
//             deliveryPrice=120;
//             alert(`Доставка в ${inputCountry} буде коштувати ${deliveryPrice} кредитів`);
//             break;
//         case '':
            
//             alert('ви не вказали жодної країни');
//             break;
//         default:
//             alert('У вашій країні доставка недоступна');  

//     }
//     }else{alert('ви ввели число')}
// } else{alert('отменено пользователем')}

// =============task-6=======================
// let input;
// let total=0;
// do{
//     input=prompt('введите число');
//     if(isNaN(input)){
//     alert('Было введено не число, попробуйте еще раз');
//     }else{
//     total += Number(input);
//     alert(`Общая сумма чисел равна ${total}`)}
        
        
// }while(input!==null)

// ==============================================================module-02===================================================================================
// ============task-1=====================
// const logItems = function(array) {
//     for(let i=0; i<=array.length; i+=1){
//         let newNumb = array.indexOf(array[i]) + 1;
//         console.log(`${newNumb}-${array[i]}`);
        
//     }

    // for(let element of array){
       
    //     let newNumb=array.indexOf(element)+1
        
    //      console.log(`${newNumb}-${element}`

    //      );
    // }
    
//   };
  
  
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// =====================task-2=====================
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// принимающую строку (в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let messageArr = message.split(' ');
//   return messageArr.length*pricePerWord
//   };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// ===================task-3==================================
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//  (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   let newArr =string.split(' ');
//   console.log(newArr);
  
//   let maxWord = newArr[0];
// //   for (let i=0; i<newArr.length; i+=1){
// //     if(newArr[i].length>maxWord.length){
// //       maxWord=newArr[i]
// //     };
// //   };
// //   return maxWord
    
// // };

// for(let word of newArr){
//   if(word.length>maxWord.length){
//     maxWord=word
//   }
// }
// return maxWord
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force

// ======================task-4====================================
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец 
// строки троеточие '...', после чего возвращает укороченную версию.

// const formatString = function(string) {
//   console.log(string.length);
//   if(string.length>40){
//     return string.slice(0,40)+'...';
//   };

//   return string
  
// };


// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка

// ============task-5==============================================
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, 
// если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//   if (message.toLowerCase().includes('spam')|| message.toLowerCase().includes('sale')){
//     return true
//   }
//   return false
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// =========================task-6==========================================

// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//  Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input=prompt('введіть число');
// const numbers = [];
// let total = 0;
// let inputNumb;
// do{
// if (isNaN(input)){
//   alert('ви ввели не число, введіть число');
//   continue;
// }else if(input!==null && input!==''){
//   numbers.push(Number(input))
// };
// if(input===null&&numbers.length>0){
//   for (let number of numbers){
//     total+=number
//   }
// }
// }while (input !== null) {
//   console.log(`total sum ${total}`);
  
// }
// do {
//           input = prompt('Введіть,будь ласка, число');
//           if (isNaN(input)) {
//               alert('Введіть, будь ласка,число');
//               continue; 
  
//               }else if(input!==null&&input!==''){
//                   inputNumb=Number(input);
//                   numbers.push(inputNumb);
//                   console.log(numbers);
//               };
//           if (input===null){
//               if(numbers.length>0){
//                   for(let number of numbers){
//                       total+=number;
//                   };
//               } else{
//                   console.log('Масив пустий');
//               }
//           };                                                                  
          
//       } while(input !==null);
//       console.log(`Загальна сума чисел ${total}`);

// ============task-7=========================
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//         if(login.length>=4 && login.length<=16){
//         return true;
//       }
//       return false;

// };

// const isLoginUnique = function(allLogins, login) {
//   if(allLogins.includes(login)){
//       return false;
//   }
//   return true;
// };

// const addLogin = function(allLogins, login) {
//     if(isLoginValid(login) && isLoginUnique(allLogins, login)){
//         allLogins.push(login);
//         console.log(allLogins);
        
//         return 'Логин успешно добавлен!';
//     }else if(!isLoginValid(login)){
//         return 'Ошибка! Логин должен быть от 4 до 16 символов'
//     }else if(!isLoginUnique(allLogins, login)){
//         return 'Такой логин уже используется!'
//     }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ===========================================module 03==========================================================================
// ========task02==================
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const countProps = function(obj) {
//   console.table(Object.keys(obj));
  
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// ==============================task-04==================================================
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя 
// самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся 
// как свойства объекта в формате "имя":"кол-во задач".

// const findBestEmployee = function(employees) {
//   let vallArr=Object.values(employees)
//   let maxVall=Math.max(...vallArr);
//   console.log(vallArr);
//   console.log(maxVall);
  
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// ==========================module 04-train==========================================================
// ==========callback=====================================
// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);


// =============Абстрагирование повторения================
// const repeatNumb=function(n){
// for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }
//  repeatNumb(5) 
// ========================
// const printValue = function(value) {
//     console.log(value);
//   };
  
//   const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
//   };
  
//   const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
  // Передаем printValue как callback-функцию
  // repeat(3, printValue);
  // 0
  // 1
  // 2
  
  // Передаем prettyPrint как callback-функцию
  // repeat(3, prettyPrint);
  // Logging value: 0
  // Logging value: 1
  // Logging value: 2
  
// =================================практика по 5 модулю============================
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// console.log(getWage(baseSalary, overtime, rate));

// const employee={
//     baseSalary:30000,
//     overtime:10,
//     rate:20,
//     getWage(){
//         return this.baseSalary+this.overtime*this.rate
//     }
// }

// console.log(employee.getWage());
// const Manager =function(name, sales) {
//     this.name=name;
//     this.sales=sales;
//     // this.sell=function(){
//     //     this.sales+=1;
//     // }
// };

// Manager.prototype.sell=function(){
//     this.sales+=1;
// }

// console.dir(Manager)
// const mango=new Manager('Mango',5);
// console.log(mango);
// mango.sell();
// console.log(mango);
// // const poly=new Manager('Poly',10);
// // console.log(poly);

// ===================================================================25-06-2020====================================================================================
// const object={
//     name: 'some name',
//     showThis: function(){
//         console.log(this)
//         const
//     }
// }
// =====================================================================================
// const getInfo=function(){
//     console.log(this.name);
    
// }



// const User =function(name, age, status){
//     this.name=name
//     this.age=age
//     this.status=status

//     this.getInfo=getInfo

// }
// const alex=new User('Alex', 25,'student')
// const poly=new User('Poly', 27,'student')
// const nikita=new User('Nikita', 35,'teacher')

// console.log(alex);
// ===============================================================================================================
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age){
//       age>18 ? true : confirm('Родители разрешили?'
//   }

function min (a,b){
    return  console.log(Math.min(a,b));
    
}


min(2, 5) 
min(3, -1) 
min(1, 1) 