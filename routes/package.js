const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/package');
    });

router.get('/tokyo', 
    async(req, res) => {
            res.render('pages/tokyoo');
    });

        router.get('/tokyo/data', 
        async(req, res) => {
                res.render('pages/dat');
        });

        router.get('/tokyo/data/book', 
        async(req, res) => {
                res.render('pages/book');
        });

        router.get('/tokyo/data/book/thank',  
        async(req, res) => {
                res.render('pages/thank');
        });
    

router.get('/osaka', 
    async(req, res) => {
            res.render('pages/osaka');
    });

    router.get('/osaka/data', 
    async(req, res) => {
            res.render('pages/dat2');
    });

    router.get('/osaka/data/book', 
    async(req, res) => {
            res.render('pages/book2');
    });
    
    router.get('/osaka/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/kyoto', 
    async(req, res) => {
            res.render('pages/kyoto');
    });

    router.get('/kyoto/data', 
    async(req, res) => {
            res.render('pages/dat3');
    });

    router.get('/kyoto/data/book', 
    async(req, res) => {
            res.render('pages/book3');
    });
    
    router.get('/kyoto/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/paris', 
    async(req, res) => {
            res.render('pages/pariss');
    });

    router.get('/paris/data', 
    async(req, res) => {
            res.render('pages/dat4');
    });

    router.get('/paris/data/book', 
    async(req, res) => {
            res.render('pages/book4');
    });
    
    router.get('/paris/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/lyon', 
    async(req, res) => {
            res.render('pages/lyon');
    });

    router.get('/lyon/data', 
    async(req, res) => {
            res.render('pages/dat5');
    });

    router.get('/lyon/data/book', 
    async(req, res) => {
            res.render('pages/book5');
    });
    
    router.get('/lyon/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/nice', 
    async(req, res) => {
            res.render('pages/nice');
    });

    router.get('/nice/data', 
    async(req, res) => {
            res.render('pages/dat6');
    });

    router.get('/nice/data/book', 
    async(req, res) => {
            res.render('pages/book6');
    });
    
    router.get('/nice/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/melbourne', 
    async(req, res) => {
            res.render('pages/melbournee');
    });

    router.get('/melbourne/data', 
    async(req, res) => {
            res.render('pages/dat7');
    });

    router.get('/melbourne/data/book', 
    async(req, res) => {
            res.render('pages/book7');
    });
    
    router.get('/melbourne/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/sydney', 
    async(req, res) => {
            res.render('pages/sydneyy');
    });

    router.get('/sydney/data', 
    async(req, res) => {
            res.render('pages/dat8');
    });

    router.get('/sydney/data/book', 
    async(req, res) => {
            res.render('pages/book8');
    });
    
    router.get('/sydney/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

router.get('/goldcoast', 
    async(req, res) => {
            res.render('pages/goldcoast');
    });

    router.get('/goldcoast/data', 
    async(req, res) => {
            res.render('pages/dat9');
    });

    router.get('/goldcoast/data/book', 
    async(req, res) => {
            res.render('pages/book9');
    });
    
    router.get('/goldcoast/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

module.exports = router;


