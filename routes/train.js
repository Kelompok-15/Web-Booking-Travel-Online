const express = require('express');
const router = express.Router();

router.get('/trainticket', 
    async(req, res) => {
        res.render('pages/PemesananTiketKereta');
    });
router.get('/trainsearchticket',
    async(req,res) => {
        res.render('pages/PencarianTiketKereta')
    });
router.get('/trainprice1',
    async(req,res) => {
        res.render('pages/PriceDetailKereta')
    });
router.get('/trainprice2',
    async(req,res) => {
        res.render('pages/PriceDetailKereta2')
    });
router.get('/trainprice3',
    async(req,res) => {
        res.render('pages/PriceDetailKereta3')
    });
router.get('/datatrain1',
    async(req,res) => {
        res.render('pages/DataKereta')
    });
router.get('/datatrain2',
    async(req,res) => {
        res.render('pages/DataKereta2')
    });
router.get('/datatrain3',
    async(req,res) => {
        res.render('pages/DataKereta3')
    });
router.get('/bookingtrain1',
    async(req,res) => {
        res.render('pages/BookingDetailKereta')
    });
router.get('/bookingtrain2',
    async(req,res) => {
        res.render('pages/BookingDetailKereta2')
    });
router.get('/bookingtrain3',
    async(req,res) => {
        res.render('pages/BookingDetailKereta3')
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('pages/Thankyou')
    });
module.exports = router;