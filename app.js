const express = require('express')
const config = require('config')


const app = express();

const PORT = config.get('port')  || 5000;

app.get('/', (req, res) => {
    res.send('Hello world');
    res.end()
})

app.listen(PORT, (err) => {
    app
    if (err) {
        return console.error('Error in server setup: ', err)
    }
    console.log(`Server has been started on port ${PORT}...`)
})