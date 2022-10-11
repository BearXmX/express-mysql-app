const COMMON_ENV_PATH = `./config/.${process.env.NODE_ENV}.env`

require('dotenv').config({ path: COMMON_ENV_PATH })

module.exports = {
  APP_CONFIG: process.env.APP_CONFIG,
  DATABASE_URL: process.env.DATABASE_URL
}