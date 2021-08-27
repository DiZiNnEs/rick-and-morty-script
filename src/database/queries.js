const { Pool } = require('pg');
const { DATABASE_CONFIG } = require("./modelsConfig");

module.exports.insertCharactersIntoDb = async (name, jsonb) => {
  const pool = new Pool(DATABASE_CONFIG);
  const queryCharacter = `
      INSERT INTO characters(name, data)
        VALUES ('${name}', '${JSON.stringify(jsonb)}');
  `

  await pool.query(queryCharacter)
    .then(() => console.log('successfully add new data into CHARACTERS table'))
    .catch((err) => console.log(`${err}`))
    .finally(pool.end());

  return null;
}
