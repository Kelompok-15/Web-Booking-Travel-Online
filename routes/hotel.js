const express = require('express');
const router = express.Router();

const DataHotelController = require('../controllers/datahotel')
const generalInfoHotelController = require('../controllers/generalInfoHotel')

router.get('/hotelroom', 
    async(req, res) => {
        res.render('pages/PemesananKamarHotel')
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
        res.render('pages/BookingDetailHotel', {
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/bookinghotel2',
    async(req,res) => {
        res.render('pages/BookingDetailHotel2', {
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/bookinghotel3',
    async(req,res) => {
        res.render('pages/BookingDetailHotel3', {
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/bookinghotel4',
    async(req,res) => {
        res.render('pages/BookingDetailHotel4',{
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/bookinghotel5',
    async(req,res) => {
        res.render('pages/BookingDetailHotel5',{
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/bookinghotel6',
    async(req,res) => {
        res.render('pages/BookingDetailHotel6',{
            hotels: await DataHotelController.find(),
            infoHotels : await generalInfoHotelController.find()
        })
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('pages/Thankyou')
    });
    
router.post('/addGeneral',
    async(req,res) => {
        const date = req.body.date;
        const date2 = req.body.date2;
        const guest = req.body.guest;
        await DataHotelController.create(date, date2, guest)
        res.redirect('/hotel/roomsearch')
    });
router.post('/addData',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel1')
    });
router.post('/addData2',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel2')
    });
router.post('/addData3',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel3')
    });
router.post('/addData4',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel4')
    });
    router.post('/addData5',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel5')
    });
router.post('/addData6',
    async(req,res) => {
        const cname = req.body.cname;
        const email = req.body.email;
        const phoneno = req.body.phoneno;
        const gname = req.body.gname;
        await generalInfoHotelController.create(cname, email, phoneno, gname)
        res.redirect('/hotel/bookinghotel6')
    });
router.post('/clearAll', 
    async (req, res) => {
        //remove all data
        await DataHotelController.destroy();
        await generalInfoHotelController.destroy();
        //back to order page
        res.redirect('/hotel/hotelroom');
    }
)
router.post('/clearAllThankyou', 
    async (req, res) => {
        //remove all data
        await DataHotelController.destroy();
        await generalInfoHotelController.destroy();
        //back to order page
        res.redirect('/hotel/thankyou');
    }
)
module.exports = router;