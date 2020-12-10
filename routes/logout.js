const express = require('express');

const router = express.Router();

router.get('/',
    async (req, res) => {
        delete req.session.user;
        res.redirect('/');
    }
)

module.exports = router;