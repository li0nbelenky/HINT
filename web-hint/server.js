const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const index = require('./public/index');
const api = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('src', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');

app.use('/', index);
// app.use('/api', api);

mongoose.connect('mongodb://localhost/temperatures');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function () {
  app.listen(3000, function () {
    console.log('Node server running on port 3000');
  });
});