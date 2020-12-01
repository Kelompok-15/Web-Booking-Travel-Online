const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/goldcoast", async (req, res) => {
    res.render('pages/goldcoast');
})

router.get("/data9", async (req, res) => {
    res.render('pages/data9');
})

router.get("/bookingdetail9", async (req, res) => {
    res.render('pages/bookingdetail9');
})

module.exports = router;