const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express();

const PORT = config.get('port')  || 5000;

async function start() {
    try {
        await mongoose.connect(config.get("mongoURI"), {
            useNewUrlParser: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        
        app.listen(PORT, (err) => {
            app
            if (err) {
                return console.error('Error in server setup: ', err);
            }
            console.log(`Server has been started on port ${PORT}...`);
        })

    } catch (err) {
        console.error('Connecting to DB :', err.message);
        process.exit(1);
    }
}

start();


app.get('/', (req, res) => {
    res.send('Hello world');
    res.end();
})

