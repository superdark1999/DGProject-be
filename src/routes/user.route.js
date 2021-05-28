const express = require("express");

const { getUser } = require("../controllers/user.controller");

const route = express.Router();

route.get("/", getUser);

module.exports = route;
