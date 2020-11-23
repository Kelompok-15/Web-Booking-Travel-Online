const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const reccoRouter = require('./routes/recommendation');

app.use('/', indexRouter);
app.use('/recommendation', reccoRouter);

app.listen(port, () => console.log(`Server started on Port ${port}`));