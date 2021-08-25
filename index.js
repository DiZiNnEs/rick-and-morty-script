// axios.get('https://rickandmortyapi.com/api/character/')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.results);
//   })
//   .catch(error => {
//     console.log(error);
//   });



const { createCharacterTable } = require("./database");

(async () => {
  await createCharacterTable()
})()
