const express = require("express");
const routes = express.Router();

const CommandsCrontroller = require("../controllers/CommandsControllers");
const CommandMiddleware = require("../middlewares/CommandMiddleware");

routes.get("/itemsCommand", CommandsCrontroller.index);
routes.post("/itemCommand", CommandsCrontroller.create);
routes.put(
  "/itemCommand/:id",
  CommandMiddleware.validateId,
  CommandsCrontroller.update
);
routes.delete(
  "/itemCommand/:id",
  CommandMiddleware.validateId,
  CommandsCrontroller.delete
);
module.exports = routes;
