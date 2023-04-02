const { User } = require('../models');

const userData = [
  {
    username: 'greetings',
    password: 'hello',
  },
  {
    username: 'john',
    password: 'smith',
  },
  {
    username: 'jane',
    password: 'doe',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
