//lets require/import the mongodb native drivers.

var express = require('express');
var app = express();
var router = express.Router();


var rtCreate = require('./routes/create.js');
var rtAdd = require('./routes/add.js');
var rtGet = require('./routes/get.js');
var rtRemove = require('./routes/remove.js');
var rtIndex = require('./routes/getIndex.js');

//routes
app.use('/create',rtCreate);
app.use('/add', rtAdd);
app.use('/get', rtGet);
app.use('/remove', rtRemove);
app.use('/indexof', rtIndex);

app.listen(8080);

