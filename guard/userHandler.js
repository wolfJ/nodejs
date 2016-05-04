var fs = require('fs');
var cipher = require("./cipher");
var algorithm="aes256";
 

function show (response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});

  var key = fs.readFileSync('./config','utf8');

  var data_enc = fs.readFileSync('./data.encrypt','utf8');

  //response.write("\ndata.encrypt info:\n");
  //response.write(data_enc);

  response.write("\nafter decrypt:\n");
  var data_dec=cipher.decipher(algorithm,key,data_enc);
  response.write(data_dec);

  response.end();
}

function encrypt (response) {
  console.log("Request handler 'encrypt' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});

  var key = fs.readFileSync('./config','utf8');
  var data = fs.readFileSync('./data','utf8');
  response.write("\ndata info:\n");
  response.write(data);

  response.write("\nafter encrypt:\n");
  var data_enc=cipher.cipher(algorithm,key,data);
  response.write(data_enc);

  fs.writeFile("./data.encrypt",data_enc,'utf8')
  
}

exports.show = show;
exports.encrypt = encrypt;