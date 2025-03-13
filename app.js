const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set views directory and EJS as the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
