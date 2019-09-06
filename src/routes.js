const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  res.send("hello!");
});

module.exports = routes;
