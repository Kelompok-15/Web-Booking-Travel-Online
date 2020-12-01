const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/paris", async (req, res) => {
    res.render('pages/paris');
})

router.get("/data4", async (req, res) => {
    res.render('pages/data4');
})

router.get("/bookingdetail", async (req, res) => {
    res.render('pages/bookingdetail4');
})

module.exports = router;