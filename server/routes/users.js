var express = require('express')
var router = express.Router()

var usersDB = require('../db/users')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  usersDB.getUsers(db)
    .then(users => {
      res.json(users)
    })
})

module.exports = router
