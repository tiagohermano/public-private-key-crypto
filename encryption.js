function encrypt(pubKey, text) {
  // Encrypt with the public key...
  var encrypt = new JSEncrypt();
  // encrypt.setPublicKey($('#pubkey').val());
  return encrypt.encrypt(text);
}

function decrypt(privKey, encryptedText) {
  // Decrypt with the private key...
  var decrypt = new JSEncrypt();
  // decrypt.setPrivateKey($('#privkey').val());
  return decrypt.decrypt(encryptedText);
}
