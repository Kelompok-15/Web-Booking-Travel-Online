const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/sydney');
    });

router.get('/Dat8', 
    async(req, res) => {
            res.render('pages/Dat8');
    });

router.get('/book8', 
    async(req, res) => {
            res.render('pages/book8');
    });

    
router.get('/thank', 
async(req, res) => {
        res.render('pages/thank');
});
