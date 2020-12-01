const express = require('express');
const router = express.Router();

router.get('/login',
 async (req, res) => {
     res.render('pages/login');

 } 
);

router.postt('/login',
 async (req, res) => {
    // cek login
    }
);

module.exports = router;