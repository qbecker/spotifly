var express = require('express');
var router = express.Router();
var gi = require('../model/getIndex');


router.get('/:queueName/:index',function(req, res){
    console.log("MATCHED getIndex");
    console.log(req.params.queueName);
    gi.getIndex(req.params.queueName,req.params.index, function(songList){
        res.send(songList);
    });
});


module.exports = router;