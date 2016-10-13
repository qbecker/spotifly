var express = require('express');
var router = express.Router();
var gs = require('../model/getSongs');


router.get('/:queueName',function(req, res){
    console.log("MATCHED getSongs");
    console.log(req.params.queueName);
    gs.getSongs(req.params.queueName, function(songList){
        res.send(songList);
    });
});


module.exports = router;