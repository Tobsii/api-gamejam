require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
// Routes aus files
const user = require('./routes/user');
const tiles = require('./routes/tiles');
// Mache externe Routes verwendbar
app.use('/user', user);
app.use('/tiles', tiles);

// zeigt bei .../status den Text "Working" auf der Seite an
app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);