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
const students =['Alex', 'Nikita', 'Boris'];
const alex = students[0];
console.log(alex);