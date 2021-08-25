const { createCharacterTable } = require("./src/database/models");
const { parseCharacters } = require("./src/api/parseCharacters");


(async () => {
  await createCharacterTable();
  await parseCharacters();
})()
