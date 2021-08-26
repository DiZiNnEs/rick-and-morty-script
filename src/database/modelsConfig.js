require('dotenv').config()


module.exports.DATABASE_CONFIG = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  ssl: { rejectUnauthorized: (process.env.REJECT_UNAUTHORIZED === 'true') }
};
