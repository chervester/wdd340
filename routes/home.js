const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home' }); // Pass a title to index.ejs
});

module.exports = router;
