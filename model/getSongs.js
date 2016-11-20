var queue = require('../model/models');

function getSongs(queueName, callback){
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
            callback(queue.songList);
        }else{
            callback("Sorry queue not found");
        }
    });
}
module.exports.getSongs = getSongs;