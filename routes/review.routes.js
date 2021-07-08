const router = require("express").Router();
const Review = require('./../models/Review.model')
const Airport = require('./../models/Airport.model')
const { checkLoggedUser } = require('./../middleware')
const { formatDate, toDate } = require("./../utils")


router.get('/', (req, res) => {
    Review
        .find()
        .populate('airport')
        .then(reviews => {
            // console.log(reviews[0].travelDate)
            // reviews.forEach(elm => formatDate(elm.travelDate))
            // //console.log('soy la fecha del then', fecha)
            // console.log({ reviews })
            res.render('pages/reviews/reviews-list', { reviews })
        })
        .catch(err => console.log(err))
})

router.get('/new', checkLoggedUser, (req, res) => {
    Airport
        .find({ name: { $ne: null }, type: "airport", lat: { $ne: null }, lon: { $ne: null } })
        .then(airports => res.render('pages/reviews/new-review', { airports }))
        .catch(err => console.log(err))
})

router.post('/new', (req, res) => {
    const { airport, travelDate, migrationTime, rating, } = req.body

    const user = req.session.currentUser._id
    const requirements = {
        pcr: req.body.pcr ? true : false,
        vaccine: req.body.vaccine ? true : false,
        greenPassport: req.body.greenPassport ? true : false,
        quarantine: req.body.quarantine ? true : false
    }
    const experience = { positiveExperience, negativeExperience } = req.body

    Review
        .create({ user, travelDate, airport, migrationTime, experience, rating, requirements })
        .then(() => { res.redirect('/review') })
        .catch(err => console.log(err))
})
//Delete
router.get('/:id/delete', (req, res) => {

    const { id } = req.params

    Review
        .findByIdAndRemove(id)
        .then(() => res.redirect('/review'))
        .catch(err => console.log(err))
})
// Render Edit  
router.get('/:id/edit', (req, res) => {

    const { id } = req.params
    const reviewPromise = Review.findById(id)
    const airportPromise = Airport.find()

    Promise.all([reviewPromise, airportPromise])
        .then(results => {
            let formatedDate = toDate(results[0].travelDate)
            res.render('pages/reviews/edit-review', { review: results[0], airports: results[1], formatedDate })
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

    const { airport, travelDate, migrationTime, rating } = req.body;
    const requirements = {
        pcr: req.body.pcr ? true : false,
        vaccine: req.body.vaccine ? true : false,
        greenPassport: req.body.greenPassport ? true : false,
        quarantine: req.body.quarantine ? true : false
    }
    const experience = { positiveExperience, negativeExperience } = req.body
    const { id } = req.params;
    Review
        .findById(id)
        .populate('airport')
        .then(review => {
            res.render('pages/reviews/edit-review', {airport:review.airport})
        })
        .catch(err => console.log(err))
    Review
        .create({ travelDate, airport, migrationTime, experience, rating, requirements })
        .then(() => {
            res.redirect('/review')
        })
        .catch(err => console.log(err))
})



//Esto al final !!!!
router.get('/:id', (req, res) => {

    const { id } = req.params
   
    Review
        .findById(id)
        .populate('user')
        .populate('airport')
        .then(review => { 
            res.render('pages/reviews/review-details', review)
        })
        .catch(err => console.log(err))
})




module.exports = router