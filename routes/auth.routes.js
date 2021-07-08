const router = require("express").Router();
const bcrypt = require('bcrypt')

const User = require('./../models/User.model')


// Signup
router.get('/signup', (req, res) => res.render('pages/auth/signup-page'))

router.post('/signup', (req, res) => {

  
  const { name, mail, pwd } = req.body
  if (!mail.length || !pwd.length) {
    res.render('pages/auth/signup-page', { errorMessage: 'Rellena todos los campos' })
    return
  }

  if (!pwd.match(/[0-9]/) || pwd.length < 2) {
    res.render('pages/auth/signup-page', { errorMessage: 'La contraseña debe tener un número y mínimo 2 caracteres' })
    return
  }

  
  User
  .findOne({ mail })
    .then(user => {
      
      if (user) {
        res.render('pages/auth/signup-page', { errorMessage: 'Usuario ya registrado' })
        return
      }
      
      const bcryptSalt = 10
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(pwd, salt)
      
      
      User
      .create({ name, mail, password: hashPass })
      .then(() => res.redirect('/login'))
      .catch(err => console.log(err, "si soy yo el error"))
      
    })
    .catch(err => console.log(err))
  })
  
  
  // Login
  router.get('/login', (req, res) => res.render('pages/auth/login-page'))
  
  router.post('/login', (req, res) => {

  const { mail, pwd } = req.body

  User
    .findOne({ mail })
    .then(user => {

      if (!user) {
        res.render('pages/auth/login-page', { errorMessage: 'Usuario no reconocido' })
        return
      }

      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.render('pages/auth/login-page', { errorMessage: 'Contraseña incorrecta' })
        return
      }

      req.session.currentUser = user      // Iniciar sesión = almacenar el usuario logueado en req.session.currentUser
      res.redirect('/profile')
    })
    .catch(err => console.log(err))
})

router.get('/close', (req, res) => req.session.destroy(() => res.redirect('/')))

module.exports = router