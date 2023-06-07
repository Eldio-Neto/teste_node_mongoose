const PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://127.0.0.1/newlinks');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));
db.once('open', function(){console.log("connected to DB"); })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/templates'))

app.use('/', linkRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});