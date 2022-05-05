const express = require("express");
const routes = express.Router();

const MenuItems = require("../controllers/MenuItemControllers");
const CommandMiddleware = require("../middlewares/MenuItemMiddleware");
const authMiddleware = require("../middlewares/auth");

routes.get("/menuItems", authMiddleware, MenuItems.index);
routes.get(
  "/menuItem/:id",
  authMiddleware,
  CommandMiddleware.validateId,
  MenuItems.ListItem_Id
);
routes.post("/menuItem", authMiddleware, MenuItems.create);
routes.put(
  "/menuItem/:id",
  authMiddleware,
  CommandMiddleware.validateId,
  MenuItems.update
);
routes.delete(
  "/menuItem/:id",
  authMiddleware,
  CommandMiddleware.validateId,
  MenuItems.delete
);
module.exports = routes;
