const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Initialize body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define static file
app.use(express.static("public"));

require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
