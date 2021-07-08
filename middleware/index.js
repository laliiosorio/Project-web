module.exports = {
    checkLoggedUser: (req, res, next) => {
        req.session.currentUser ? next() : res.render('pages/auth/login-page', { errorMessage: 'Inicia sesión para continuar' })
    }
//     checkRoles: (...rolesToCheck) => (req,res,next)=>{
//         rolesToCheck.includes(req.session.currentUser.role) ? next() : res.render('pages/auth/login-page', { errorMessage: 'No dispones de autorización para ello' })
//     },
//     checkADMINorMEMBER: (req, res, next) => {
//         const isADMIN = req.session.currentUser.role === 'ADMIN'
//         const isMEMBER = req.session.currentUser._id === req.params.user_id

//         isADMIN || isMEMBER ? next() : res.render('pages/auth/login-page', { errorMessage: 'No dispones de privilegios suficientes' })
//     }
 }