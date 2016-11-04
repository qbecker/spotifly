var queue = require('../model/models');


function removeItem(queueName, item, callback){
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
            });
            
        }else{
            callback("Queue not found!");
        }
    });
}


module.exports.removeItem = removeItem;