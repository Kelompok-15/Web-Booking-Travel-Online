const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/sydney", async (req, res) => {
    res.render('pages/sydney');
})

router.get("/data8", async (req, res) => {
    res.render('pages/data8');
})

router.get("/bookingdetail8", async (req, res) => {
    res.render('pages/bookingdetail8');
})

module.exports = router;