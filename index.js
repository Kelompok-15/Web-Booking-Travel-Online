const express = require('express');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const { userInfo } = require('os');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static("public"));

//routes
const planeRouter = require('./routes/plane');
const trainRouter = require('./routes/train');
const hotelRouter = require('./routes/hotel');

app.use('/plane', planeRouter);
app.use('/train', trainRouter);
app.use('/hotel', hotelRouter);

app.listen(port, () => console.log(`Server started on Port ${port}`));