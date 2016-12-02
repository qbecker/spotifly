var express = require('express');
var router = express.Router();
var rs = require('../model/removeItem');


router.get('/:queueName/:item',function(req, res){
    console.log("MATCHED remove Song");
    console.log(req.params.queueName);
    console.log(req.params.item);
    rs.removeItem(req.params.queueName,req.params.item, function(result){
        res.send(result);
    });
});


module.exports = router;