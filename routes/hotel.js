const express = require('express');
const router = express.Router();

router.get('/hotelroom', 
    async(req, res) => {
            res.render('pages/PemesananKamarHotel');
    });
router.get('/roomsearch',
    async(req,res) => {
        res.render('pages/PencarianTiketHotel')
    });
router.get('/roomchoice1',
    async(req,res) => {
        res.render('pages/PilihKamarHotel')
    });
router.get('/roomchoice2',
    async(req,res) => {
        res.render('pages/PilihKamarHotel2')
    });
router.get('/roomchoice3',
    async(req,res) => {
        res.render('pages/PilihKamarHotel3')
    });
router.get('/datahotel1',
    async(req,res) => {
        res.render('pages/DataHotel')
    });
router.get('/datahotel2',
    async(req,res) => {
        res.render('pages/DataHotel2')
    });
router.get('/datahotel3',
    async(req,res) => {
        res.render('pages/DataHotel3')
    });
router.get('/datahotel4',
    async(req,res) => {
        res.render('pages/DataHotel4')
    });
router.get('/datahotel5',
    async(req,res) => {
        res.render('pages/DataHotel5')
    });
router.get('/datahotel6',
    async(req,res) => {
        res.render('pages/DataHotel6')
    });
router.get('/bookinghotel1',
    async(req,res) => {
        res.render('pages/BookingDetailHotel')
    });
router.get('/bookinghotel2',
    async(req,res) => {
        res.render('pages/BookingDetailHotel2')
    });
router.get('/bookinghotel3',
    async(req,res) => {
        res.render('pages/BookingDetailHotel3')
    });
router.get('/bookinghotel4',
    async(req,res) => {
        res.render('pages/BookingDetailHotel4')
    });
router.get('/bookinghotel5',
    async(req,res) => {
        res.render('pages/BookingDetailHotel5')
    });
router.get('/bookinghotel6',
    async(req,res) => {
        res.render('pages/BookingDetailHotel6')
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('pages/Thankyou')
    });

module.exports = router;