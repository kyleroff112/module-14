const seedUsers = require('./user-seeds');
const seedBlogPosts = require ('./blog-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogPosts();
  console.log('\n----- BLOG POSTS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  process.exit(0);
};

seedAll();
