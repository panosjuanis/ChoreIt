const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

//environment variables
app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/person", require('./routes/person.router.js'))
app.use("/api/task", require('./routes/task.router.js'))
app.use("/api/home", require('./routes/home.router.js'))

module.exports = app;