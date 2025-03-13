const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the views directory and EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Ensure views are correctly set
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
