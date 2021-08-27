const axios = require("axios");

module.exports.getCharactersPages = async () => {
  const pages = [];
  const URL = 'https://rickandmortyapi.com/api/character/';

  try {
    const response = await axios.get(URL);
    const page = response.data.info.pages;
    range(1, page + 1)
      .map(x => pages.push(`https://rickandmortyapi.com/api/character/?page=${x}`));
  } catch (error) {
    console.error(error);
  }
  return pages;
};

function range(start, end) {
  const indexes = [];
  for (let i = start; i < end; i++) {
    indexes.push(i);
  }
  return indexes;
}
