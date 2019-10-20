const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const consola = require("consola");
const router = require("./src/router.js");

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
app.set("port", port);

async function run() {
  app.disable("x-powered-by"); // QUESTION: any reason is this line here?
  //ANSWER:
  // For the security reasons, disable the x-powered-by considers a good practice for production.
  // It doesn't expose the server my project is running on. For example, if I'm using Nginx HTTP server, but
  // I want to expose it as an Apache, I would use this line for that. It might confuse a person who would try to find vulnerabilities for Apache
  // as the person might think from that line, as in reality I'm using Nginx and obscure it.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/", router);
  app.use("/api", require("./src/api.js"));

  app.use((err, req, res, next) => {
    res.send('I\'m from middleware');
    next();
  });


  const server = http.createServer(app);

  server.listen(port, host);
  consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
});
}

run();
