const express = require('express');
const router = express.Router();

const DataPlaneController = require('../controllers/dataplane')
const generalInfoController = require('../controllers/generalInfo');

router.get('/planeticket', 
    async(req, res) => {
            res.render('PemesananTiket') // SATU
    })
router.get('/planesearchticket',
    async(req,res) => {
        res.render('PencarianTiketPesawat')
    });
router.get('/planeprice1',
    async(req,res) => {
        res.render('PriceDetail')
    });
router.get('/planeprice2',
    async(req,res) => {
        res.render('PriceDetailPesawat2')
    });
router.get('/planeprice3',
    async(req,res) => {
        res.render('PriceDetailPesawat3')
    });
router.get('/dataplane1',
    async(req,res) => {
        res.render('Data')  // DUA
    });
router.get('/dataplane2',
    async(req,res) => {
        res.render('Data1')
    });
router.get('/dataplane3',
    async(req,res) => {
        res.render('Data2')
    });
router.get('/bookingplane1',
    async(req,res) => {
        res.render('BookingDetail',
        {
            planes: await DataPlaneController.find(), 
            info: await generalInfoController.find() // TIGA
        }) 
    });
router.get('/bookingplane2',
    async(req,res) => {
        res.render('BookingDetailPesawat2',{
            planes: await DataPlaneController.find(), 
            info: await generalInfoController.find() // TIGA
        })
    });
router.get('/bookingplane3',
    async(req,res) => {
        res.render('BookingDetailPesawat3',{
            planes: await DataPlaneController.find(), 
            info: await generalInfoController.find() // TIGA
        })
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('Thankyou')
    });

router.post('/addGeneral',
    async(req,res) => {
        const trip = req.body.trip;
        const passenger = req.body.passenger;
        const seatclass = req.body.seatclass;
        await DataPlaneController.create(trip, passenger, seatclass);
        res.redirect('/plane/planesearchticket')
    }
)
router.post('/addData',
    async(req,res) => {
        const fName = req.body.fName;
        const lName = req.body.lName;
        const eMail = req.body.eMail;
        const phoneNo = req.body.phoneNo;
        const fName2 = req.body.fName2;
        const lName2 = req.body.lName2;
        const eMail2 = req.body.eMail2;
        const city = req.body.city;
        const phoneNo2 = req.body.phoneNo2;
        await generalInfoController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/plane/bookingplane1')
    }
)

router.post('/addData2',
    async(req,res) => {
        const fName = req.body.fName;
        const lName = req.body.lName;
        const eMail = req.body.eMail;
        const phoneNo = req.body.phoneNo;
        const fName2 = req.body.fName2;
        const lName2 = req.body.lName2;
        const eMail2 = req.body.eMail2;
        const city = req.body.city;
        const phoneNo2 = req.body.phoneNo2;
        await generalInfoController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/plane/bookingplane2')
    }
)

router.post('/addData3',
    async(req,res) => {
        const fName = req.body.fName;
        const lName = req.body.lName;
        const eMail = req.body.eMail;
        const phoneNo = req.body.phoneNo;
        const fName2 = req.body.fName2;
        const lName2 = req.body.lName2;
        const eMail2 = req.body.eMail2;
        const city = req.body.city;
        const phoneNo2 = req.body.phoneNo2;
        await generalInfoController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/plane/bookingplane3')
    }
)

router.post('/clearAll', 
    async (req, res) => {
        //remove all data
        await DataPlaneController.destroy();
        await generalInfoController.destroy();
        //back to order page
        res.redirect('/plane/planeticket');
    }
)
module.exports = router;