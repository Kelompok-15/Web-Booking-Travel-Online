const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
   res.render('pages/index');
})

router.get("/tokyo", async (req, res) => {
   res.render('pages/tokyoo');
})

router.get("/data", async (req, res) => {
   res.render('pages/data');
})

router.get("/booking", async (req, res) => {
   res.render('pages/book');
})

router.get("/Thankyou", async (req, res) => {
   res.render('pages/thank');
})


module.exports = router;