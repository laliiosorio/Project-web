module.exports = app => {
  app.use('/', require('./base.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/review', require('./review.routes'))
  app.use('/profile', require('./profile.routes'))
}