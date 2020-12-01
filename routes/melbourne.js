const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/melbourne", async (req, res) => {
    res.render('pages/melbourne');
})

router.get("/data7", async (req, res) => {
    res.render('pages/data7');
})

router.get("/bookingdetail7", async (req, res) => {
    res.render('pages/bookingdetail7');
})

module.exports = router;