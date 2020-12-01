const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/osaka", async (req, res) => {
    res.render('pages/osaka');
})

router.get("/data2", async (req, res) => {
    res.render('pages/data2');
})

router.get("/bookingdetail2", async (req, res) => {
    res.render('pages/bookingdetail2');
})

module.exports = router;