
const mysql = require('mysql')

const connection = mysql.createConnection(process.env.DATABASE_URL)

exports.connection = connection

module.exports = {
  mysql,
  connection
}