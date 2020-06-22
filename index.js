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

// [[0,"Alex"], [1,"Boris"]];