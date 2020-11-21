const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.end('Hello, World!')
})

app.listen(port, () => console.log(`Server started on Port ${port}`));