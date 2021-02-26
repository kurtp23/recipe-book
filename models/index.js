const Sequelize = require('sequelize');

const db = new Sequelize('recipe_book_db', 'postgres', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: postgres,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//test db
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });