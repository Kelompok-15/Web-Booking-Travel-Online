const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/kyoto", async (req, res) => {
    res.render('pages/kyoto');
})

router.get("/data3", async (req, res) => {
    res.render('pages/data3');
})

router.get("/bookingdetail3", async (req, res) => {
    res.render('pages/bookingdetail3');
})

module.exports = router;