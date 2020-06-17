const http = require('http');
const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    res.send('<h1>You are an User !</h1>')
});

app.use('/', (req, res, next) => {
    res.send('<h1>You are in Default Page!</h1>')
    next();
});


app.listen(3000);