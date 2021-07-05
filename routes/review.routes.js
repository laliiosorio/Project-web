const router = require("express").Router();
const Review = require('./../models/Review.model')
const Airport = require('./../models/Airport.model')


router.get('/', (req, res) => {
    Airport
        .find()
        .then(airports => res.render('pages/reviews/new-review', { airports }))
        .catch(err => console.log(err))
})



module.exports = router