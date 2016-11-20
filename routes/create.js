var express = require('express');
var router = express.Router();
var qm = require('../model/queueAddRemove');

router.get('/:queueName',function(req, res){
    console.log("MATCHED addqueue");
    console.log(req.params.queueName);
    qm.checkDB(req.params.queueName,function(response){
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    });
});


module.exports = router;