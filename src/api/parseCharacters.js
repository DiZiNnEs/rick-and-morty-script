const axios = require("axios");
const { getCharactersPages } = require("./getPages");
const { insertCharactersIntoDb } = require("../database/queries");


module.exports.parseCharacters = async () => {
  const pages = await getCharactersPages();

  try {
    for (let i = 0; i < pages.length; i++) {
      const currentPage = pages[i];
      const response = await axios.get(currentPage);
      for (let j = 0; j < response.data.results.length; j++) {
        const name = response.data.results[j].name;
        const jsonb = response.data.results[j];
        await insertCharactersIntoDb(name, jsonb);
      }
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}
