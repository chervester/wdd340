const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Ensure `views/index.ejs` exists
});

module.exports = router;
