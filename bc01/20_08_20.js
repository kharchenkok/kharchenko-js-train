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

const refs = {
    form: document.querySelector('.form'),
    loginInput: document.querySelector('.login'),
    passwordInput: document.querySelector('.password'),
}
function toGetInput(event){
    console.log(event.target.value);
    console.log(event);

}
refs.form.addEventListener('input', toGetInput)