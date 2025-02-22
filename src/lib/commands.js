const { readSecrets, writeSecrets } = require("./secrets");
const crypto = require("crypto");

function set(password, key, value) {
  const cryptoKey = crypto.createCipher("aes-128-cbc", password);
  let encryptedValue = cryptoKey.update(value, "utf8", "hex");
  encryptedValue += cryptoKey.final("hex");

  const secrets = readSecrets();
  secrets[key] = encryptedValue;
  writeSecrets(secrets);
}

function unset(key) {
  const secrets = readSecrets();
  delete secrets[key];
  writeSecrets(secrets);
}

function get(password, key) {
  const secrets = readSecrets();
  const secret = secrets[key];

  const cryptoKey = crypto.createDecipher("aes-128-cbc", password);
  let decryptedSecret = cryptoKey.update(secret, "hex", "utf8");
  decryptedSecret += cryptoKey.final("utf8");

  return decryptedSecret;
}

exports.executeCommand = function executeCommand(password, action, key, value) {
  switch (action) {
    case "get":
      get(password, key);
      return get(password, key);
    case "set":
      set(password, key, value);
      return set(password, key, value);
    case "unset":
      unset(password, key);
      return set(password, key);
  }
};

exports.set = set;
exports.unset = unset;
exports.get = get;
