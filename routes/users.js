const router = require('express').Router()
const { User } = require('../models')

router.post('/users', (req, res, next) => {
  User.register(new User({name: req.body.name, email: req.body.email}), req.body.password, (err, user) => {
    if (err) {
      err.status = 422
      return next(err)
    }

    const cleanUser = {name: user.name, email: user.email, createdAt: user.createdAt}

    res.status(201).send(cleanUser)
  })
})

module.exports = router
