var express = require('express');
var router = express.Router();

const { connection } = require('../mysql')

/* GET update listing. */
router.get('/', function (req, res, next) {

  connection.query(`update MYTEST set age=${Math.floor(Math.random() * 2000)} where id=1`, (err, value) => {
    if (err) {
      console.error('mysql err', err);
      return
    }

    console.info(value)
  })

  res.send('respond with a resource');
});

module.exports = router;