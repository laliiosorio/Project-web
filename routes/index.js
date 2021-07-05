module.exports = app => {
  app.use('/', require('./base.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/review', require('./review.routes'))
}