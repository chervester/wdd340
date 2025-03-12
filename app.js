const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoute = require('./routes/home'); // Ensure this file exists
app.use('/', homeRoute);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
