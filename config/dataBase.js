var mongodb = require('mongodb');
var config = require('../config/dbConfig');


var mongoose = require('mongoose')
mongoose.connect(config.url, function () {
  console.log('mongodb connected')
})


module.exports = mongoose;