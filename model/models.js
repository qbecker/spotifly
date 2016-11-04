var db = require('../config/dataBase');

var queue = db.model('queue',{Name: String, songList: Array});

module.exports = queue;