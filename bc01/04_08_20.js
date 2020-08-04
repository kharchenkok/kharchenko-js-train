//   Напишите скрипт который реализует следующий функционал.

//   Есть кнопка с классом button, текст которой отображает
//   кол-во раз которое по ней кликнули, обновляется при каждом клике.

// const button = document.querySelector('.button')
// console.log(button);
// let numberClick= 0
// let showNumbOfClick = function(event){
//     numberClick +=1;
//     button.textContent = numberClick

// }
// button.addEventListener('click', showNumbOfClick)
// ============================================================================

// Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
//   получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
// const body = document.querySelector("body");
// const button = document.querySelector(".button");
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");

// let getResult = function () {
//     let totalSum = 0;
//   totalSum = Number(input1.value) + Number(input2.value);

//   body.insertAdjacentHTML("beforeend", `<span>${totalSum}</span>`);
// clearInput()
// };

// let clearInput = function(){
// input1.value = '';
// input2.value = '';
// body.querySelector('span').textContent = 'ok';

// }

// button.addEventListener("click", getResult);

// Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
// после чего нажимает кнопку "Submit" и происходит отправка формы.

// При отправке формы:
//   - не должна перезагружаться страница
//   - необходимо получить выбранную опцию и вывести в параграф с классом .result

const inputForm = document.querySelector(".input-form");
const inputWrapper = inputForm.querySelector(".input-wrapper");
const inputArr = inputWrapper.querySelectorAll("input");
const buttonWrapper = inputForm.querySelector(".button-wrapper");
const btnSubmit = inputForm.querySelector(".btnSubmit");


let checkInputForm = function (e) {
  e.preventDefault();
  inputArr.forEach((input) => {
    if (input.checked) {
        console.log(input);
    buttonWrapper.insertAdjacentHTML(
        "beforeend",
        `<p>Ви обрали${input.value}</p>`
      );
    } else {
       alert("Ви нічого не обрали");
    }
  });
};

btnSubmit.addEventListener('submit', checkInputForm);
