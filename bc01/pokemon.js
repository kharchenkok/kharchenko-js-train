import pokemon from './pokemonData.js'
console.log(pokemon);
let body = document.querySelector('body')
console.log(body);

let pokemonCart = document.createElement('div')
let cartTitle = document.createElement('h2')
let pokemonImg = document.createElement('img')
let pokemonDiscr = document.createElement('p')

pokemonCart.style.width = '250px'
pokemonCart.style.height = '450px'
pokemonCart.style.backgroundColor = '#817e7ea1'
pokemonCart.style.margin = '0 auto'
pokemonCart.style.textAlign = 'center'

pokemonImg.setAttribute('src',`${pokemon.sprites.front_female}`)



pokemonCart.append(cartTitle)
pokemonCart.append(pokemonImg)
pokemonCart.append(pokemonDiscr)
body.append(pokemonCart)

cartTitle.textContent = `${pokemon.name}`