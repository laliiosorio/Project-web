const router = require("express").Router()
const Review = require('./../models/Review.model')

const Airport = require('./../models/Airport.model')


router.get('/', (req, res) => {

    Airport
        .find()
        .then(airport => res.json(airport))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {

    const { id } = req.params
    Review
        .findById(id)
        .populate('airport')
        .then(review => res.json(review))
        .catch(err => console.log(err))
})

module.exports = router