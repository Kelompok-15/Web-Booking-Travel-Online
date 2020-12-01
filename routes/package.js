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

router.get('/osaka', 
    async(req, res) => {
            res.render('pages/osakaa');
    });

router.get('/kyoto', 
    async(req, res) => {
            res.render('pages/kyoto');
    });


router.get('/paris', 
    async(req, res) => {
            res.render('pages/pariss');
    });

router.get('/lyon', 
    async(req, res) => {
            res.render('pages/lyon');
    });

router.get('/nice', 
    async(req, res) => {
            res.render('pages/nice');
    });

router.get('/melbourne', 
    async(req, res) => {
            res.render('pages/melbournee');
    });

router.get('/sydney', 
    async(req, res) => {
            res.render('pages/sydney');
    });

router.get('/goldcoast', 
    async(req, res) => {
            res.render('pages/goldcoast');
    });




