const { Pool } = require('pg');
const { DATABASE_CONFIG } = require("./modelsConfig");

module.exports.createCharacterTable = async () => {
  const pool = new Pool(DATABASE_CONFIG);

  const queryCharacter = `
      CREATE TABLE IF NOT EXISTS characters
      (
          id   SERIAL PRIMARY KEY NOT NULL,
          name text               NOT NULL,
          data jsonb              NOT NULL
      );
  `;

  await pool.query(queryCharacter)
    .then(() => console.log('successfully create CHARACTERS table'))
    .catch((err) => console.log(`ERROR in models CHARACTERS: ${err}`))
    .finally(pool.end());

  return null;
};
