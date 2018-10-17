const express = require("express");
const router = express.Router();
const todoService = require("../api/todo/todoService");

module.exports = server => {
  //API Routes
  server.use("/api", router);

  //TODO Routes
  todoService.register(router, "/todo");
};
