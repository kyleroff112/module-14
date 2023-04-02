const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.',
    userId: 1 // the ID of the user who wrote this post
  },
  {
    title: 'My Second Blog Post',
    content: 'This is the content of my second blog post.',
    userId: 1 // the ID of the user who wrote this post
  },
  {
    title: 'My Third Blog Post',
    content: 'This is the content of my third blog post.',
    userId: 2 // the ID of the user who wrote this post
  }
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
