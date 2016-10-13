var mongodb = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = mongodb.MongoClient;
//dburl
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';


function removeItem(queueName, item, callback){
    var db =  mongoose.createConnection(url);
    var queue = db.model('queue',{Name: String, songList: Array});
    queue.findOne({Name: queueName},function(err, queue){
        if(err){
            console.log(err);
        }else if(queue){
            for(var i = queue.songList.length -1; i >= 0; i--){
                if(queue.songList[i] === item){
                    queue.songList.splice(i, 1);
                }
            }
            queue.save(function(err){
                if(err){
                    console.log(err);
                }
                callback(queue);
                db.close();
            });
            
        }else{
            callback("Queue not found!");
            db.close();
        }
    });
}


module.exports.removeItem = removeItem;