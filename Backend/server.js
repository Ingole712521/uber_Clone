/** @format */

const http = require("http");
const app = require("./App");
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App is listen on PORT number ${port}`);
});

http.createServer(function (res, req) {
  res.writeHead("2");
});
