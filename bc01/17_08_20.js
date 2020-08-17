// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
// const loadJson = async function(url){
//     try{
//     let response = await fetch(url);
//         const data = await response.json();
//         return data
//     }catch{}
// }

// async function wait(){
//     await new Promise(resolve => setTimeout(resolve,1000))
//     return 10
// }
// function f(){
//     wait().then(data => console.log(data))
// }
// f()

async function getPokemons(url) {
  const allOfThem = await fetch(url);
  const AllData = await allOfThem.json();
  const bulbalsarJson = await fetch(AllData.results[0].url);
  const BulbalsarData = await bulbalsarJson.json();

  return { AllData, BulbalsarData };
  // return AllData
}

getPokemons("https://pokeapi.co/api/v2/pokemon").then((data) =>
  console.log(data)
);
