const { readSecrets, writeSecrets } = require("./models/secrets");

// alternative solution with slice and array destructoring
// const [
//   /* add something here */
// ] = process.argv.slice(/* add something here */);

// console.log(action, key, value);

const [action, key, value] = process.argv.slice(2);

function set(key, value) {
  const secrets = readSecrets();
  secrets[key] = value;
  writeSecrets(secrets);
}

function unset(key) {
  const secrets = readSecrets();
  delete secrets[key];
  writeSecrets(secrets);
}

function get(key) {
  console.log("get", key);
  const secrets = readSecrets();
  console.log("get", key);
  const secret = secrets[key];
  console.log(secret);
}

// call the correct function based on action

switch (action) {
  case "get":
    get(key);
    break;
  case "set":
    set(key, value);
    break;
  case "unset":
    unset(key);
    break;
}
