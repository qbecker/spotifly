var queue = require('../model/models');

function addItem(queueName,item, callback){
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
            });
        }else{
            callback("Queue not found");
        }
    });
}
module.exports.addItem = addItem;