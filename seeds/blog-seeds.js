const { BlogPost } = require('../models');

const blogPostData = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.',
  },
  {
    title: 'My Second Blog Post',
    content: 'This is the content of my second blog post.',
  },
  {
    title: 'My Third Blog Post',
    content: 'This is the content of my third blog post.',
  }
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
