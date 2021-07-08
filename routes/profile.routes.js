const router = require("express").Router();
const { checkLoggedUser} = require('./../middleware')
const User = require('./../models/User.model');
const { CDNupload } = require('./../config/cloudinary.config')

router.get('/', checkLoggedUser, (req, res) => {
    const user_ID = req.session.currentUser._id
    console.log(req.session.currentUser)

    User
        .findById(user_ID)
        .then(response => {
            res.render('pages/profile/my-profile', response)

        })
        .catch(err => console.error(err));
});
router.get('/:userId/delete', checkLoggedUser, (req, res) => {

    const { userId } = req.params

User
    .findByIdAndDelete(userId)
    .then(() => res.redirect('/login'))
    .catch(err => console.log(err))
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
router.post('/:userId/edit', CDNupload.single('image'), (req, res) => {

    const { name, description, mail } = req.body
    let path
    if (req.file === undefined) {
        path = req.session.currentUser.image
    } else {
        path = req.file.path
    }

    console.log('ESTA ES LA IMAGEN', req.file)
    const { userId } = req.params

    console.log('---------->', userId)
    console.log('Esta informacin me est llegando', req.body)

    User
        .findByIdAndUpdate(userId, { name, description, mail, image: path })
        .then(() => {
            res.redirect('/profile')
        })
        .catch(err => console.log(err))
})
module.exports = router