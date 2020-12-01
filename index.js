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

app.use('/', indexRouter);
app.use('/recommendation', reccoRouter);
app.use('/hotel', hotelRouter);
app.use('/plane', planeRouter);
app.use('/train', trainRouter);

app.listen(port, () => console.log(`Server started on Port ${port}`));