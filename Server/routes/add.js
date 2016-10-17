var express = require('express');
var router = express.Router();
var aI = require('../model/addItem');

router.get('/:queueName/:songID',function(req, res){
    console.log("MATCHED addSong");
    console.log(req.params.queueName);
    console.log(req.params.songID);
    aI.addItem(req.params.queueName, req.params.songID, function(result){
        res.send(result);
    });
});


module.exports = router;