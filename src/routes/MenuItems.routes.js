const express = require("express");
const routes = express.Router();

const MenuItems = require("../controllers/MenuItemControllers");
const CommandMiddleware = require("../middlewares/MenuItemMiddleware");

routes.get("/menuItems", MenuItems.index);
routes.get(
  "/menuItem/:id",
  CommandMiddleware.validateId,
  MenuItems.ListItem_Id
);
routes.post("/menuItem", MenuItems.create);
routes.put("/menuItem/:id", CommandMiddleware.validateId, MenuItems.update);
routes.delete("/menuItem/:id", CommandMiddleware.validateId, MenuItems.delete);
module.exports = routes;
