var crypto = require('crypto');

//加密
function cipher(algorithm, key, text){
    var encrypted = "";
    var cip = crypto.createCipher(algorithm, key);
    encrypted += cip.update(text, 'utf8', 'hex');
    encrypted += cip.final('hex');
    return encrypted;
}

//解密
function decipher(algorithm, key, encrypted){
    var decrypted = "";
    var decipher = crypto.createDecipher(algorithm, key);
    decrypted += decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


exports.cipher = cipher;
exports.decipher = decipher;