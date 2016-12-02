var queue = require('../model/models');
var http = require('https');

function addItem(queueName,item, callback){
    queue.findOne({Name: queueName}, function(err, queue){
        if(err){
            console.log(err);
        }
        else if(queue){
           getSongInfo(item, function(newSong){
               if(newSong != undefined){
                   queue.songList.push(newSong);
               }
                queue.save(function(err){
                    if(err){
                        console.log(err);
                    }
                    callback([{"Accepted": "Y"}]);
                });
           });
        }else{
            callback([{"Accepted": "N"}]);
        }
    });
}

function getSongInfo(song, callback){
    var n = song.lastIndexOf("/");
    var songPath = "/v1/tracks/" + song;
      return http.get({
        host: 'api.spotify.com',
        path: songPath
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            var parsed = JSON.parse(body);
            if(parsed.hasOwnProperty('name')){
                 var newSong = {"link": song, "Name": parsed.name, "Artist": parsed.album.artists[0].name};
                 callback(newSong);
            }else{
                callback(undefined);
            }
        });
    });
}
module.exports.addItem = addItem;