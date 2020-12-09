const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const signupController = require('../controllers/signup');

router.get('/', async (req, res) => {
   res.render('pages/signup');
})

router.post('/register',
   async (req, res) => {
      const name = req.body.fullname;
      const email = req.body.email;
      const number = req.body.phonenumber;
      var password = req.body.password;

      //hashing  the password before uploading to db
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      password = await bcrypt.hash(password, salt);

      await signupController.create(name, email, number, password);

      res.render('pages/index');
   }
)
module.exports = router;