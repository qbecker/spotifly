const net = require('net');
const client = net.connect({port: 80, host:"google.com"}, () => {
  console.log('MyIP='+client.localAddress);
  console.log('MyPORT='+client.localPort);
  return client.localAddress;
});


var url = "mongodb://"+ client+":27017/my_database_name";

module.exports.url = url;