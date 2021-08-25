import Pool from 'pg';

const {pool1} = Pool;


const DATABASE_CONFIG = {
  user: "postgres",
  host: "localhost",
  database: "database",
  password: "postgres",
  port: 5432,
};

let createCharacterTable;
export default createCharacterTable = async () => {
  const pool = new pool1(DATABASE_CONFIG)

  const queryCharacter = `
      CREATE TABLE IF NOT EXISTS characters
      (
          id   SERIAL PRIMARY KEY NOT NULL,
          name text               NOT NULL,
          data jsonb              NOT NULL
      );
  `

  await pool.query(queryCharacter)
    .then(() => console.log('successfully create CHARACTERS table'))
    .catch((err) => console.log(`ERROR in models CHARACTERS: ${err}`))
    .finally(pool.end());

  return null;
}
