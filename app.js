require("dotenv/config")

require("./db")

const express = require("express")
const app = express()

require("./config")(app)

app.locals.title = `Project Web`

require("./config/session.config")(app)     // sesiones

require('./routes')(app)

require("./error-handling")(app)

module.exports = app