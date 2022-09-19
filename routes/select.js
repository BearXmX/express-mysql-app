var express = require('express');
var router = express.Router();

const { connection } = require('../mysql')

/* GET select listing. */
router.get('/', function (req, res, next) {
  connection.query(`select * from MYTEST`, (err, value) => {
    if (err) {
      console.error('mysql err', err);
      return
    }

    console.info(value)

  })

  res.send('respond with a resource');
});

module.exports = router;