const express = require('express');
const router = express.Router();

const DatController = require('../controllers/dat')

router.get('/', 
    async(req, res) => {
            res.render('pages/package');
    });

router.get('/back', 
    async (req, res) => {
            res.redirect('/');
    })    

router.get('/tokyo', 
    async(req, res) => {
            res.render('pages/tokyoo');
    });

        router.get('/tokyo/data', 
                async(req, res) => {
                        res.render('pages/dat');
                });

        router.post('/addDat',
                async(req,res) => {
                        const fName = req.body.fName;
                        const lName = req.body.lName;
                        const eMail = req.body.eMail;
                        const phoneNo = req.body.phoneNo;
                        const fName2 = req.body.fName2;
                        const lName2 = req.body.lName2;
                        const eMail2 = req.body.eMail2;
                        const phoneNo2 = req.body.phoneNo2;
                        await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
                        res.redirect('/package/tokyo/data/book')
                })

        router.get('/tokyo/data/book', 
                async(req, res) => {
                        res.render('pages/book',
                        {
                        datt : await DatController.find(), 
                        });
                });

        router.post('/clearTokyo', 
                async (req, res) => {
                        //remove all data
                        await DatController.destroy();
                        //back to order page
                        res.redirect('/package/tokyo/data');
                })
        
        router.post('/clearTokyo1', 
                async (req, res) => {
                        //remove all data
                        await DatController.destroy();
                        //back to order page
                        res.redirect('/package/tokyo/data/book/thank');
                })

    
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

        router.post('/addDat2',
                async(req,res) => {
                        const fName = req.body.fName;
                        const lName = req.body.lName;
                        const eMail = req.body.eMail;
                        const phoneNo = req.body.phoneNo;
                        const fName2 = req.body.fName2;
                        const lName2 = req.body.lName2;
                        const eMail2 = req.body.eMail2;
                        const phoneNo2 = req.body.phoneNo2;
                        await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
                        res.redirect('/package/osaka/data/book')
                })

        router.get('/osaka/data/book', 
                async(req, res) => {
                        res.render('pages/book2', 
                        {
                        datt : await DatController.find(), 
                        });
                });
    
        router.post('/clearOsaka', 
                async (req, res) => {
                        //remove all data
                        await DatController.destroy();
                        //back to order page
                        res.redirect('/package/osaka/data');
                })
        router.post('/clearOsaka1', 
                async (req, res) => {
                        //remove all data
                        await DatController.destroy();
                        //back to order page
                        res.redirect('/package/osaka/data/book/thank');
                })

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

    router.post('/addDat3',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/kyoto/data/book')
    })


    router.get('/kyoto/data/book', 
    async(req, res) => {
            res.render('pages/book3',
            {
                datt : await DatController.find(), 
                });
    });
 
    router.post('/clearKyoto', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/kyoto/data');
    })
router.post('/clearKyoto1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/kyoto/data/book/thank');
    })


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

    router.post('/addDat4',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/paris/data/book')
    })


    router.get('/paris/data/book', 
    async(req, res) => {
            res.render('pages/book4',
            {
                datt : await DatController.find(), 
                });
    });
    
    router.post('/clearParis', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/paris/data');
    })
router.post('/clearParis1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/paris/data/book/thank');
    })


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

    router.post('/addDat5',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/lyon/data/book')
    })


    router.get('/lyon/data/book', 
    async(req, res) => {
            res.render('pages/book5',
            {
                datt : await DatController.find(), 
                });
    });
    
    router.post('/clearLyon', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/lyon/data');
    })
router.post('/clearLyon1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/lyon/data/book/thank');
    })


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

    router.post('/addDat6',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/nice/data/book')
    })


    router.get('/nice/data/book', 
    async(req, res) => {
            res.render('pages/book6',
            {
                datt : await DatController.find(), 
                });
    });
    
    router.post('/clearNice', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/nice/data');
    })
router.post('/clearNice1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/nice/data/book/thank');
    })


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

    router.post('/addDat7',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/melbourne/data/book')
    })


    router.get('/melbourne/data/book', 
    async(req, res) => {
            res.render('pages/book7',
            {
                datt : await DatController.find(), 
                });
    });

    router.post('/clearMelbourne', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/Melbourne/data');
    })
router.post('/clearMelbourne1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/melbourne/data/book/thank');
    })


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

    router.post('/addDat8',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/sydney/data/book')
    })


    router.get('/sydney/data/book', 
    async(req, res) => {
            res.render('pages/book8',
            {
                datt : await DatController.find(), 
                });
    });
    
    router.post('/clearSydney', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/sydney/data');
    })
router.post('/clearSydney1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/sydney/data/book/thank');
    })


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

    router.post('/addDat9',
    async(req,res) => {
            const fName = req.body.fName;
            const lName = req.body.lName;
            const eMail = req.body.eMail;
            const phoneNo = req.body.phoneNo;
            const fName2 = req.body.fName2;
            const lName2 = req.body.lName2;
            const eMail2 = req.body.eMail2;
            const phoneNo2 = req.body.phoneNo2;
            await DatController.create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2);
            res.redirect('/package/goldcoast/data/book')
    })


    router.get('/goldcoast/data/book', 
    async(req, res) => {
            res.render('pages/book9',
            {
                datt : await DatController.find(), 
                });
    });
    
    router.post('/clearGoldcoast', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/goldcoast/data');
    })
router.post('/clearGoldcoast1', 
    async (req, res) => {
            //remove all data
            await DatController.destroy();
            //back to order page
            res.redirect('/package/goldcoast/data/book/thank');
    })


    router.get('/goldcoast/data/book/thank',  
    async(req, res) => {
            res.render('pages/thank');
    });

module.exports = router;


