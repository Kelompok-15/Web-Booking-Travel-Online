const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
   res.render('pages/recommendation');
})

router.get("/bora", async (req, res) => {
   res.render('pages/bora');
})

router.get("/sydney", async (req, res) => {
   res.render('pages/sydney');
})

router.get("/maui", async (req, res) => {
   res.render('pages/maui');
})

router.get("/rajaampat", async (req, res) => {
   res.render('pages/rajaampat');
})

router.get("/paris", async (req, res) => {
   res.render('pages/paris');
})

router.get("/montana", async (req, res) => {
   res.render('pages/montana');
})

router.get("/seoul", async (req, res) => {
   res.render('pages/seoul');
})

router.get("/swiss", async (req, res) => {
   res.render('pages/swiss');
})

router.get("/tokyo", async (req, res) => {
   res.render('pages/tokyo');
})

router.get("/budapest", async (req, res) => {
   res.render('pages/budapest');
})


module.exports = router;