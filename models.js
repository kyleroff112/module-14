const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('users_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// define the user model
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING }
});

// define the blog post model
const BlogPost = sequelize.define('blog_post', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING }
});

// create the necessary tables in the database
sequelize.sync();

// export the models
module.exports = {
  User,
  BlogPost
};
