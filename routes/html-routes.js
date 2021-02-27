const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {privateKey} = require("../config/auth.json")

router.get("/view", (req, res) => res.render("recipes"));
router.get("/", authenticateToken, (req, res) => {
  // const auth = req.headers.authorization;
  // const token = auth && auth.split(" ")[1];
  const token = `Bearer ${req.cookies["access_token"]}`;
  if (!token) res.redirect("/login");

  jwt.verify(token, privateKey, (err, user) => {
    if (err) return res.status(401).end();
    res.render("menu", {});
  });  
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
