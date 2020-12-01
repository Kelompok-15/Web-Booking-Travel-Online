const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index');
})

router.get('/paket', async (req, res) => {
    res.render('pages/paket');
})

router.get("/nice", async (req, res) => {
    res.render('pages/nice');
})

router.get("/data6", async (req, res) => {
    res.render('pages/data6');
})

router.get("/bookingdetail6", async (req, res) => {
    res.render('pages/bookingdetail6');
})

module.exports = router;