const app = require('./app')

app.listen(process.env.PORT || app.get('port'))
