//lets require/import the mongodb native drivers.

var express = require('express');
var app = express();
var router = express.Router();


var rtCreate = require('./routes/create.js');
var rtAdd = require('./routes/add.js');
var rtGet = require('./routes/get.js');

app.use('/create',rtCreate);
app.use('/add', rtAdd);
app.use('/get', rtGet);


app.listen(8080);




// //We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// // Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';

// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     //HURRAY!! We are connected. :)
    
//     var collection = db.collection('tests');
//     // console.log('Connection established to', url);
//     // var test1 = {key: 'value', key2:'value2'};
//     // collection.insert([test1], function(err, result){
//     //     if(err){
//     //         console.log(err);
//     //     }else{
//     //         console.log("Placed "+ collection + " into db");
//     //     }
//     // });
    
    
//     collection.remove({key:'value'});
//     // do some work here with the database.

//     //Close connection
//     db.close();
//   }
// });