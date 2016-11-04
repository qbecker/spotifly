var queue = require('../model/models');

//Check if queue already exists, if not, call function to create it.
function checkDB(queueName, callback){
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }else if(queue){
            callback("Sorry that queue already exists");
        }else{
            createQueue(queueName);
            callback("New queue created: " + queueName);
        }
    });
}


//create new queue
function createQueue(queueName){
    var newQueue = new queue({Name: queueName, songList: []});
    newQueue.save(function(err, queue){
        if(err){
            console.log(err);
        }
        console.log('new Queue added' + queueName);
    });
}
module.exports.checkDB = checkDB;
