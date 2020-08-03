const body = document.querySelector("body");

// for (let i=0; i<2; i+=1){
//     let square = document.createElement('div')
//     square.style.width = '100px'
//     square.style.height = '100px'
//     square.style.backgroundColor = '#ff0000a1'
//     square.style.display = 'inline-block'
//     square.style.marginRight= '15px'

//     body.append(square)
//     square.textContent+=i+1

// }

// let square1 = document.createElement("div");
// let square2 = document.createElement("div");
// square1.classList.add("square-style");
// square2.classList.add("square-style");

// body.append(square1);
// body.append(square2);
// let a = "1";
// let b = "2";
// square1.textContent = a;
// square2.textContent = b;

// let changeValue = function () {
//   if (square1.textContent === a) {
//     square1.textContent = b;
//     square2.textContent = a;
//   } else if (square1.textContent === b) {
//     square1.textContent = a;
//     square2.textContent = b;
//   }
// };

// square1.addEventListener("click", changeValue);
// square2.addEventListener("click", changeValue);
// ================================================================================
// Сделайте текстовый инпут который принимает значение цвета и меняет цвет бекграунда для body

// let input = document.createElement('input')
// body.append(input)

// let changeColor = function(){
//     body.style.backgroundColor = input.value
// }

// input.addEventListener('input', changeColor)
// ============================================================================
// При нажатии на кнопку создаётся квадрат, при изменение инпута (range) - меняется его размер (размер грани должен быть больше 100 пикселей)
// При нажатии на вторую кнопку - квадрат удаляется

let createBtn = document.createElement("button");
let deleteBtn = document.createElement("button");
let inputRange = document.createElement("input");
inputRange.setAttribute("type", "range");
createBtn.textContent = "Створити квадрат";
deleteBtn.textContent = "Видалити квадрат";
let markup = [];

markup.push(createBtn, inputRange, deleteBtn);
body.prepend(...markup);
// body.prepend(createBtn)
// body.prepend(inputRange)
// body.prepend(deleteBtn)

let square = document.createElement("div");
body.append(square);
let createSquare = function () {
  square.classList.add("square-style");
};
let deleteSquare = function () {
  square.classList.remove("square-style");
};

let changeSquare = function () {
  square.style.width = Number(inputRange.value) + "px";
  square.style.height = Number(inputRange.value) + "px";
};

createBtn.addEventListener("click", createSquare);
deleteBtn.addEventListener("click", deleteSquare);
inputRange.addEventListener("input", changeSquare);
