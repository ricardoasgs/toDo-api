const express = require("express");

const todoService = require("../api/todo/todoService");
const userService = require("../api/user/userService");
const auth = require("../api/middlewares/auth");

const openRouter = express.Router();

const router = express.Router();

module.exports = server => {
  //OpenAPI Routes
  server.use("/oapi/auth", openRouter);

  openRouter.post("/login", userService.login);
  openRouter.post("/signup", userService.signup);
  openRouter.post("/validateToken", userService.validateToken);

  server.use("/api", router);
  router.use(auth);

  //TODO Routes
  todoService.register(router, "/todo");
};
