const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')

// Inicializaciones
const app = express()

// configuraciones
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.engine(
    '.hbs',
    engine({
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        defaultLayout: path.join(app.get('views'), '/layouts/index'),
        extname: '.hbs',
    })
)
app.set('view engine', '.hbs')

// middlewares
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: false }))

// rutas

module.exports = app
