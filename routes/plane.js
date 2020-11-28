const express = require('express');
const router = express.Router();

router.get('/', 
    async(req, res) => {
            res.render('pages/PemesananTiket');
    });
router.get('/planesearchticket',
    async(req,res) => {
        res.render('pages/PencarianTiketPesawat')
    });
router.get('/planeprice1',
    async(req,res) => {
        res.render('pages/PriceDetail')
    });
router.get('/planeprice2',
    async(req,res) => {
        res.render('pages/PriceDetailPesawat2')
    });
router.get('/planeprice3',
    async(req,res) => {
        res.render('pages/PriceDetailPesawat3')
    });
router.get('/dataplane1',
    async(req,res) => {
        res.render('pages/Data')
    });
router.get('/dataplane2',
    async(req,res) => {
        res.render('pages/Data1')
    });
router.get('/dataplane3',
    async(req,res) => {
        res.render('pages/Data2')
    });
router.get('/bookingplane1',
    async(req,res) => {
        res.render('pages/BookingDetail')
    });
router.get('/bookingplane2',
    async(req,res) => {
        res.render('pages/BookingDetailPesawat2')
    });
router.get('/bookingplane3',
    async(req,res) => {
        res.render('pages/BookingDetailPesawat3')
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('pages/Thankyou')
    });

module.exports = router;