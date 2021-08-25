const { createCharacterTable } = require("./src/database/models");
const { getCharactersPages } = require("./src/api/getPages");

(async () => {
  await createCharacterTable()
  console.log(await getCharactersPages())
})()
