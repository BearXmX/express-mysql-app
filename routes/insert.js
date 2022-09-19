var express = require('express');
var router = express.Router();

const connection = require('../mysql').connection

/* GET insert listing. */
router.get('/', function (req, res, next) {
  connection.query(`insert into MYTEST (age) values (${Math.floor(Math.random() * 2000)})`, (err, value) => {
    if (err) {
      console.error('mysql err', err);
      return
    }

    console.info(value)
  })

  res.send('respond with a resource');
});

module.exports = router;
