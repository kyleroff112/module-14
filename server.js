const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add API routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
