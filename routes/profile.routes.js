const router = require("express").Router();
const { checkLoggedUser } = require('./../middleware')
const User = require('./../models/User.model');
const { CDNupload } = require('../config/file-upload.config')

router.get('/', checkLoggedUser, (req, res) => {
    const loggedUser = req.session.currentUser
    console.log('Este es el console.log del usuario', loggedUser)
    res.render('pages/profile/my-profile', loggedUser)
})

router.get('/:userId/edit', (req, res, next) => {
    console.log(req.params.id)
    User
        .findById(req.params.userId)
        .then(response => {
            console.log(response)
            res.render('pages/profile/edit-profile', response)
        })
        .catch(err => console.error(err));
});
// router.post('/:id/edit', (req, res, next) => {
//     const { name, description} = req.body;
//     User
//         .create(req.body)
//         .then(() => {
//             res.redirect('/')
//         })
//         .catch((err) => {
//             console.log('error' + err)
//         })
// })
router.post('/:userId/edit', (req, res) => {

    const { name, description, mail } = req.body
    // const { path } = req.file
    const { userId } = req.params
    console.log('---------->', userId)
    console.log('Esta informacin me est llegando', req.body)

    User
        .findByIdAndUpdate(userId, { name, description, mail })
        .then(() => {
            res.redirect('/profile')
        })
        .catch(err => console.log(err))
})
module.exports = router