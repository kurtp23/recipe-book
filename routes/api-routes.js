const express = require("express");
const router = express.Router();

router.post("/api/addRecipe", (req, res) => {
  console.log(req.body);
});
router.post("/api/login", (req, res) => {
  console.log(req.body);
});
router.post("/api/newUser", (req, res) => {
  console.log(req.body);
});
module.exports = router;
