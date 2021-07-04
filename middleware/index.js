module.exports = {
    checkLoggedUser: (req, res, next) => {
        req.session.currentUser ? next() : res.render('pages/auth/login-page', { errorMessage: 'Inicia sesión para continuar' })
    }
}