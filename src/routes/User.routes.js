const express = require("express");
const routes = express.Router();
const UserSchema = require("../controllers/AuthControllers");
routes.post("/auth/register", UserSchema.create);
module.exports = routes;
