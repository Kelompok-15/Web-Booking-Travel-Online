const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
   res.render('pages/recommendation');
})

router.get("/bora", async (req, res) => {
   res.render('pages/bora');
})
module.exports = router;