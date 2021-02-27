const express = require("express");
const authenticateToken = require("../auth/middleware/authenticateToken");
const router = express.Router();

router.get("/view", (req, res) => res.render("recipes"));
router.get("/", (req, res) => {
  const auth = req.headers.authorization;
  const token = auth && auth.split(" ")[1];
  if (!token) return res.redirect("/login");

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
module.exports = router;
