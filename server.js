// This file creates our node server
const { debug } = require("console");
const http = require("http");

const app = require("./app");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("listening on " + bind);
};

// use the hosting port else 3000
const port = normalizePort(process.env.PORT || 3000);

app.set("port", port);

const server = http.createServer(app);
server.on("listening", onListening);
server.listen(port);
