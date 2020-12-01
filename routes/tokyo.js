const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/tokyo');
    });

router.get('/Data', 
    async(req, res) => {
            res.render('pages/Dat');
    });

router.get('/book', 
    async(req, res) => {
            res.render('pages/book');
    });

router.get('/thank', 
    async(req, res) => {
            res.render('pages/thank');
    });




    
