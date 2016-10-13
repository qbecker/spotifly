var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoose = require('mongoose');
var qm = require('../model/queueAddRemove');
//DBURL
var url = 'mongodb://qbecker-spotifly-3880413:27017/my_database_name';

function addItem(queueName,item, callback){
    
    mongoose.connect(url);
    qm.queue.findOne({Name: queueName}, function(err, queue){
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
                mongoose.disconnect();
            });
        }else{
            callback("Queue not found");
            mongoose.disconnect();
        }
    });
}

module.exports.addItem = addItem;