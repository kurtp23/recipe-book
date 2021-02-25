const express = require("express");
const router = express.Router();

router.get("/view", (req, res) => res.render("recipes"));
router.get("/", (req, res) => {
  console.log("hello");
  res.render("menu", {});
});

module.exports = router;
