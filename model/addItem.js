var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';

function addItem(queueName,item, callback){
    var db = mongoose.createConnection(url);
    var queue = db.model('queue',{Name: String, songList: Array});
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
            queue.songList.push(item);
            queue.save(function(err){
                if(err){
                    console.log(err);
                }
                callback("Updated" + queue);
                db.close();
            });
        }else{
            callback("Queue not found");
            db.close();
        }
    });
}

module.exports.addItem = addItem;