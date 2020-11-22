const express = require('express');
const router = express.Router();

router.get('/hotelroom', 
    async(req, res) => {
            res.render('PemesananKamarHotel');
    }
);

module.exports = router;