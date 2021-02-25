const Sequelize = require('sequelize');
const db = require('../config/db.js');

const recipes = db.define('recipes', {
  title: {
    type: Sequelize.STRING
  }
});

recipes.sync().then(() => {
  console.log('table created');
});
module.exports = recipes;