const jwt = require('jsonwebtoken');
const { privateKey } = require('../config/auth.json');
const db = require('../models');

db.User.findOrCreate({
  where: {
    username: 'User1',
  },
  defaults: {
    password: 'password',
  },
});

const validateLogin = async ({ username, password }) => {
  const user = await db.User.findOne({
    where: { username, password },
  });
  if (!user) throw 'Unmatched credentials';
  return jwt.sign({ username }, privateKey);
};

module.exports = validateLogin;
