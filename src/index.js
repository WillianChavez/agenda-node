const app = require('./app')

app.listen(app.get('port'), () => {
    console.log('puerto: http://localhost:' + app.get('port'))
})
