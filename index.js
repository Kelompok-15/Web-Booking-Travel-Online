const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

app.use( express.static( "public" ) );

const indexRouter = require('./routes/index');
const reccoRouter = require('./routes/recommendation');
const hotelRouter = require('./routes/hotel');
const planeRouter = require('./routes/plane');
const trainRouter = require('./routes/train');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');
const aboutusRouter = require('./routes/aboutus');
const packageRouter = require('./routes/package');
const tokyooRouter = require('./routes/tokyoo');
const parissRouter = require('./routes/pariss');
const sydneyyRouter = require('./routes/sydneyy');

app.use('/', indexRouter);
app.use('/recommendation', reccoRouter);
app.use('/hotel', hotelRouter);
app.use('/plane', planeRouter);
app.use('/train', trainRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/aboutus', aboutusRouter);
app.use('/package', packageRouter);
app.use('/tokyo', tokyooRouter);
app.use('/paris', parissRouter);
app.use('/sydney', sydneyyRouter);

app.listen(port, () => console.log(`Server started on Port ${port}`));