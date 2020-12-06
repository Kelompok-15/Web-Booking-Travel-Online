const express = require('express');
const router = express.Router();

const DataTrainController = require('../controllers/datatrain')
const generalInfoKeretaController = require('../controllers/generalInfoKereta')

router.get('/trainticket', 
    async(req, res) => {
        res.render('pages/PemesananTiketKereta');
    });
router.get('/trainsearchticket',
    async(req,res) => {
        res.render('pages/PencarianTiketKereta')
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
        res.render('pages/BookingDetailKereta',{
            trains : await DataTrainController.find(),
            infoTrains : await generalInfoKeretaController.find()
        })
    });
router.get('/bookingtrain2',
    async(req,res) => {
        res.render('pages/BookingDetailKereta2', {
            trains : await DataTrainController.find(),
            infoTrains : await generalInfoKeretaController.find()
        })
    });
router.get('/bookingtrain3',
    async(req,res) => {
        res.render('pages/BookingDetailKereta3',{
            trains : await DataTrainController.find(),
            infoTrains : await generalInfoKeretaController.find()
        })
    });
router.get('/thankyou',
    async(req,res) => {
        res.render('pages/Thankyou')
    });
router.post('/addGeneral',
    async(req,res) => {
        const date = req.body.date;
        const name = req.body.name;
        await DataTrainController.create(date, name);
        res.redirect('/train/trainsearchticket')
    });

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
        await generalInfoKeretaController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/train/bookingtrain1')
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
        await generalInfoKeretaController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/train/bookingtrain1')
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
        await generalInfoKeretaController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2);
        res.redirect('/train/bookingtrain1')
    }
)
router.post('/clearAll', 
    async (req, res) => {
        //remove all data
        await DataTrainController.destroy();
        await generalInfoKeretaController.destroy();
        //back to order page
        res.redirect('/train/trainticket');
    }
)
module.exports = router;