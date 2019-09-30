const fs = require("fs");

function readSecrets() {
  try {
    const secretsJSON = fs.readFileSync("secrets.json", "utf-8");
    const secrets = JSON.parse(secretsJSON);
    return secrets;
  } catch (error) {
    writeSecrets({});
    return {};
  }
}

function writeSecrets(secrets) {
  fs.writeFileSync("secrets.json", JSON.stringify(secrets));
}

// We export 2 functions

exports.readSecrets = readSecrets;
exports.writeSecrets = writeSecrets;
