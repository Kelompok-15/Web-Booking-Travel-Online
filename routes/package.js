const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/package');
    });

router.get('/Tokyo', 
    async(req, res) => {
            res.render('pages/tokyoo');
    });

router.get('/Osaka', 
    async(req, res) => {
            res.render('pages/osakaa');
    });

router.get('/Kyoto', 
    async(req, res) => {
            res.render('pages/kyoto');
    });


router.get('/Paris', 
    async(req, res) => {
            res.render('pages/pariss');
    });

router.get('/Lyon', 
    async(req, res) => {
            res.render('pages/lyon');
    });

router.get('/Nice', 
    async(req, res) => {
            res.render('pages/nice');
    });

router.get('/Melbourne', 
    async(req, res) => {
            res.render('pages/melbournee');
    });

router.get('/Sydney', 
    async(req, res) => {
            res.render('pages/sydney');
    });

router.get('/Goldcoast', 
    async(req, res) => {
            res.render('pages/goldcoast');
    });

module.exports = router;


