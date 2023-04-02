$(document).ready(function() {
  // Make an AJAX request to get the latest blog posts
  $.get('/api/posts', function(posts) {
    // Loop through the posts and append them to the 'posts' list
    posts.forEach(function(post) {
      const author = post.User ? post.User.username : 'Unknown';
      $('#posts').append('<li><h3>' + post.title + '</h3><p>' + post.content + '</p><p>Written by ' + author + '</p></li>');
    });
  });
});
