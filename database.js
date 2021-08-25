// const connectionString = 'postgres://candidate:PASSWORD@rc1c2m0keqdcncuwizmx.mdb.yandexcloud.net:6432/db1?ssl=true';

const { Pool } = require('pg');

const DATABASE_CONFIG = {
  user: "postgres",
  host: "db",
  database: "database",
  password: "postgres",
  port: 5432,
};

module.exports.createCharacterTable = async () => {
  const pool = new Pool(DATABASE_CONFIG)

  const queryCharacter = `
      CREATE TABLE IF NOT EXISTS characters
      (
          id   SERIAL PRIMARY KEY NOT NULL,
          name text               NOT NULL,
          data jsonb              NOT NULL
      );
  `

  pool.query(queryCharacter, (res, err) => {
    console.log(res, err)
  })

  // await pool.query(queryCharacter)
  //   .then(() => console.log('successfully create CHARACTERS table'))
  //   .catch((err) => console.log(`ERROR in models CHARACTERS: ${err}`))
  //   .finally(pool.end());

  return null;
}
