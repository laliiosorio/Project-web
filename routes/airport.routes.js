const router = require("express").Router()
const Review = require('./../models/Review.model')
const Airport = require('./../models/Airport.model')


router.get('/', (req, res) => {

    Review
        .find()
        .populate('airport')
        .then(reviews => {
            res.render('pages/airports/airports-list', { reviews })
        })
        .catch(err => console.log(err))
})

module.exports = router