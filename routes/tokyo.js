const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/tokyo", async (req, res) => {
    res.render('pages/tokyo');
})

router.get("/data", async (req, res) => {
    res.render('pages/data');
})

router.get("/bookingdetail", async (req, res) => {
    res.render('pages/bookingdetail');
})

module.exports = router;