const express = require("express");
const router = express.Router();

router.get("/login", function (req, res) {
    res.render("login.html");
});

router.get("/signup", function (req, res) {
    res.render("signup.html");
});

router.get("/profile", function (req, res) {
  res.render("profile.html");
});

router.get("/", function (req, res) {
  res.render("signup.html");
});