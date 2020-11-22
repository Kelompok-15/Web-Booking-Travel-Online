const express = require('express');
const router = express.Router();

router.get('/planeticket', 
    async(req, res) => {
            res.render('PemesananTiket');
    }
);

module.exports = router;