const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/lyon", async (req, res) => {
    res.render('pages/lyon');
})

router.get("/data5", async (req, res) => {
    res.render('pages/data5');
})

router.get("/bookingdetail5", async (req, res) => {
    res.render('pages/bookingdetail5');
})

module.exports = router;