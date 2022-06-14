const express = require("express");
const routes = express.Router();
const UserSchema = require("../controllers/AuthControllers");
routes.post("/user/create", UserSchema.create);
routes.post("/user/auth", UserSchema.login);
module.exports = routes;
