const express = require("express");
const router = express.Router();

router.get("/view", (req, res) => res.render("recipes"));
router.get("/", (req, res) => {
  res.render("menu", {});
});
router.get("/login", (req, res) => {
  res.render("login", {});
});
router.get("/signUp", (req, res) => {
  res.render("newUser", {});
});
router.get("/newRecipe", (req, res) => {
  res.render("add", {});
});
module.exports = router;
