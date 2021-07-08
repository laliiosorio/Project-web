const router = require("express").Router()
const Review = require('./../models/Review.model')
const Airport = require('./../models/Airport.model')


router.get('/', (req, res) => {

    Airport
        .find()
        .then(airport => res.json(airport))
        .catch(err => console.log(err))
})


module.exports = router