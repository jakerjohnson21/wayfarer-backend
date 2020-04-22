const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')
const cors = require('cors')
const app = express()
require('dotenv').config()

const routes = require('./routes')


// ------- ROUTES -------- //
app.get('/', (req, res) => {
	res.send('<h1>Wayfarer Project</h1>')
})


// ------- SERVER -------- //
app.listen(3000, () => {
	return console.log(`Server connected at http://localhost:3000`)
})