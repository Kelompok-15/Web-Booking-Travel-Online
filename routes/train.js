const express = require('express');
const router = express.Router();

router.get('/trainticket', 
    async(req, res) => {
            res.render('PemesananTiketKereta');
    }
);

module.exports = router;