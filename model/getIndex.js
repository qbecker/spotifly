var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');
//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';
function getIndex(queueName, index, callback){
    var db = mongoose.createConnection(url);
    var queue = db.model('queue',{Name: String, songList: Array});
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
            if(queue.songList[index] != undefined){
                callback(queue.songList[index]);
                db.close();
            }else{
                 callback("Sorry index not found");
                db.close();
            }
            
            
        }else{
            callback("Sorry index not found");
            db.close();
        }
    });
}
module.exports.getIndex = getIndex;