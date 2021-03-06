const express = require('express');
// Set Handlebars.
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routesHtml = require('./routes/html-routes');
const routesApi = require('./routes/api-routes');

app.use(routesHtml);
app.use(routesApi);

// Can pass argument === true will drop table for testing purposes
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT,
    );
  });
});
