var mongodb = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongodb.MongoClient;


//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';

var queue = mongoose.model('queue',{Name: String, songList: Array});

//Check if queue already exists, if not, call function to create it.
function checkDB(queueName, callback){
   var db =  mongoose.createConnection(url);
   var queue = db.model('queue',{Name: String, songList: Array});
   console.log("15");
    queue.findOne({Name: queueName}, function(err, queue){
        console.log("17");
        if(err){
            console.log(err);
        }else if(queue){
            callback("Sorry that queue already exists");
            db.close();
        }else{
            db.close();
            createQueue(queueName);
            callback("New queue created: " + queueName);
        }
    });
}


//create new queue
function createQueue(queueName){
    var db = mongoose.createConnection(url);
    var newQueue = new queue({Name: queueName, songList: []});
    console.log(newQueue);
    newQueue.save(function(err, queue){
        if(err){
            console.log(err);
        }
        console.log('new Queue added' + queueName);
        db.disconnect();
    });
    
        
}

module.exports.checkDB = checkDB;
module.exports.queue = queue;