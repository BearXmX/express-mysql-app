var express = require('express');
var router = express.Router();

const { connection } = require('../mysql')

/* GET select listing. */
router.get('/', function (req, res, next) {
  console.log('第一个中间件');
  next()
});

/* GET select listing. */
router.get('/', function (req, res, next) {
  console.log('第二个中间件');
  connection.query(`select * from MYTEST`, (err, value) => {
    if (err) {
      console.error('mysql err', err);
      return
    }
    console.log(value);
    res.send({
      env: process.env.APP_CONFIG
    });
  })
});

module.exports = router;