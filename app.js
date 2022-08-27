const express = require('express')

const homeRoutes = require('./routes/homeRoutes')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')

app.listen(3000)

app.use(homeRoutes)