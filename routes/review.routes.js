const router = require("express").Router();
const Review = require('./../models/Review.model')
const Airport = require('./../models/Airport.model')
const { checkLoggedUser } = require('./../middleware')


router.get('/', (req, res) => {
    Review
        .find()
        .populate('airport')
        .then(reviews => {

            let d = reviews[0].travelDate
            let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
            let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            //console.log(`aqui fecha ${da}-${mo}-${ye}`)
            const date = `${da}-${mo}-${ye}`
            console.log(date)
            console.log({ reviews, date })
            res.render('pages/reviews/reviews-list', { reviews, date })
        })
        .catch(err => console.log(err))
})

router.get('/new', checkLoggedUser, (req, res) => {
    Airport
        .find()
        .then(airports => res.render('pages/reviews/new-review', { airports }))
        .catch(err => console.log(err))
})

router.post('/new', (req, res) => {
    const { airport, travelDate, migrationTime, positiveExperience, negativeExperience, rating, pcr, vaccine, greenPassport, quarantine } = req.body

    const user = req.session.currentUser._id
    console.log('id user:', user._id)
    const requirements = {
        pcr: req.body.pcr ? true : false,
        vaccine: req.body.vaccine ? true : false,
        greenPassport: req.body.greenPassport ? true : false,
        quarantine: req.body.quarantine ? true : false
    }
    const experience = { positiveExperience, negativeExperience }
    console.log('AQUIIIIIIIIIIIIIIII TOY', req.body)
    const final = { user, travelDate, airport, migrationTime, experience, rating, requirements }
    console.log('AQUIIIIIIIIIIIIIIII TOY', final)

    Review
        .create({ user, travelDate, airport, migrationTime, experience, rating, requirements })
        .then(() => { res.redirect('/review') })
        .catch(err => console.log(err))
})

//Esto al final !!!!
router.get('/:id', (req, res) => {

    const { id } = req.params

    Review
        .findById(id)
        .populate('user')
        .populate('airport')
        .then(review => res.render('pages/reviews/review-details', review))
        .catch(err => console.log(err))
})




module.exports = router