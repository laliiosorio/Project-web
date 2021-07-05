const router = require("express").Router();

const User = require('./../models/User.model')

router.get ('/',(req,res)=> res.render('/pages/profile/profile'))


















module.exports = router