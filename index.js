const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const session = require('express-session');
const mongo = require('mongodb')

const app = express();

app.set('view engine', 'ejs');

app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session ({
    secret:'som3_s3cret_keys',
    cookie: {}
}));

app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://Trivel:33wijDfypDkwaD3s@cluster0.awqkm.mongodb.net/pemesanantiket?retryWrites=true&w=majority',
    {useNewUrlParser:true, useUnifiedTopology:true}
);


const db = mongoose.connection;
db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose')
});

const indexRouter = require('./routes/index');
const reccoRouter = require('./routes/recommendation');
const hotelRouter = require('./routes/hotel');
const planeRouter = require('./routes/plane');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');
const aboutusRouter = require('./routes/aboutus');
const packageRouter = require('./routes/package');
const logoutRouter = require('./routes/logout');

app.use('/', indexRouter);
app.use('/recommendation', reccoRouter);
app.use('/hotel', hotelRouter);
app.use('/plane', planeRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/aboutus', aboutusRouter);
app.use('/package', packageRouter);
app.use('/logout', logoutRouter);

app.listen(port, () => console.log(`Server started on Port ${port}`));