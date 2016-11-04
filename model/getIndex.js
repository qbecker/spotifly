var queue = require('../model/models');

function getIndex(queueName, index, callback){
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
            if(queue.songList[index] != undefined){
                callback(queue.songList[index]);
            }else{
                 callback("Sorry index not found");
            }
            
            
        }else{
            callback("Sorry queue not found");
        }
    });
}
module.exports.getIndex = getIndex;