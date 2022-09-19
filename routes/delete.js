var express = require('express');
var router = express.Router();

const { connection } = require('../mysql')

/* GET delete listing. */
router.get('/', function (req, res, next) {
  let MIN_Id = 0

  connection.query(`select * from MYTEST`, (err, value) => {
    if (err) {

      console.error('mysql err', err);

      return
    }

    if (!!value.length) {
      value.sort((a, b) => {
        return a.id - b.id
      })

      MIN_Id = value[0].id

      connection.query(`delete from MYTEST where id = ${MIN_Id}`, (err, value) => {
        if (err) {
          console.error('mysql err', err);
          return
        }

        console.info(value)

      })

    }

  })

  res.send('respond with a delete');

});

module.exports = router;