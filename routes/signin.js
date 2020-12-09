const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const userData = require('../controllers/signup');

router.get('/', async (req, res) => {
   res.render('pages/signin');
})



router.post("/login",
   async (req, res) => {
      const email = req.body.email;
      const password  = req.body.password;

      const datas = await userData.find();

      await datas.forEach((data) => {
         if (email == data.email) {
            bcrypt.compare(password, data.password, (err, result) => {
               if (err) throw err;
               if (result) {
                  res.redirect('/');
               }
               else {
                  res.render('pages/signin', {error: 'Wrong username or password!'});
               }
            })
         };
      })
   }
)

module.exports = router;