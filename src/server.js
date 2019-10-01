const http = require("http");
const { get } = require("./lib/commands");

const server = http.createServer(function(request, response) {
  console.log(request.url);
  if (request.url === "/favicon.ico") {
    return response.end();
  }
  try {
    const url = request.url;
    const slicedUrl = url.slice(1);
    const secret = get("hose", slicedUrl);
    response.write(secret);
  } catch (error) {
    response.write("Error: 404 not found");
  }
  response.end();
});

server.listen(8080);
