const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();

router.get("/view", (req, res) => res.render("recipes"));
router.get("/", authenticateToken, (req, res) => {
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
router.get("/testAuth", authenticateToken, (req, res) => {
  res.render("testAuth", {});
});

router.get("/authenticate", (req, res) => {
  res.render("authenticate", {})
})

module.exports = router;
