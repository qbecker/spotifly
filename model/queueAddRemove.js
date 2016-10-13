var mongodb = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongodb.MongoClient;


//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';

var queue = mongoose.model('queue',{Name: String, songList: Array});

//Check if queue already exists, if not, call function to create it.
function checkDB(queueName, callback){
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log(err);
        }
        var collection = db.collection('queues');
        collection.find({Name: queueName}).toArray(function(err, result){
            if (err) {
                console.log(err);
              } else if (result.length) {
                console.log('Found:', result);
                callback("Sorry that already exists");
                db.close();
              } else {
                console.log('No document(s) found with defined "find" criteria!');
                db.close();
                createQueue(queueName);
                callback("New queue created: " + queueName);
              }
        });
    });
}


//create new queue
function createQueue(queueName){
    
    
    var newQueue = new queue({Name: queueName, songList: []});
    console.log(newQueue);
    mongoose.connect(url);
    newQueue.save(function(err, queue){
        if(err){
            console.log(err);
        }
        console.log('new Queue added' + queueName);
        mongoose.disconnect();
    });
    
        
}

module.exports.checkDB = checkDB;
module.exports.queue = queue;