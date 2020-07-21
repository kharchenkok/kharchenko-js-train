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

const repeatStr = (str='',n=2) => console.log(str.repeat(n));
    
repeatStr('hello')