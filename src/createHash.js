const crypto = require("crypto");
const fs = require("fs");

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 2048, 32, "sha512")
    .toString("hex");
  return [salt, hash].join("$");
}
// instead of logging the hashed password, save it in a file, dont forget to gitignore this file

const hashedPassword = hashPassword(process.argv[2]);
fs.writeFileSync(".password", hashedPassword);
console.log(hashedPassword);
function setHashPassword() {
  try {
    const hashedPassword = hashPassword(process.argv[2])
  }
}

function readSecrets() {
  try {
    const secretsJSON = fs.readFileSync(fileName, "utf-8");
    const secrets = JSON.parse(secretsJSON);
    return secrets;
  } catch (error) {
    writeSecrets({});
    return {};
  }
}