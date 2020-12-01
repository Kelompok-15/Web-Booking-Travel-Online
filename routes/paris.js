const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/paris');
    });

router.get('/Dat4', 
    async(req, res) => {
            res.render('pages/Dat4');
    });

router.get('/book4', 
    async(req, res) => {
            res.render('pages/book4');
    });
