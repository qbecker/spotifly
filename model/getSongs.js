var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');
//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';


function getSongs(queueName, callback){
    var db = mongoose.createConnection(url);
    var queue = db.model('queue',{Name: String, songList: Array});
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
            callback(queue.songList);
            db.close();
        }else{
            callback("Sorry queue not found");
            db.close();
        }
    });
}


module.exports.getSongs = getSongs;