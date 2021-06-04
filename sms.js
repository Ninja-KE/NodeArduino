//import nexmo api module
const Nexmo = require('nexmo')

//define encryption parameters
const nexmo = new Nexmo({
    apiKey: '#########',   //your api key
    apiSecret: '#################',    //your api secret
  });

 //export module 
module.exports = nexmo
