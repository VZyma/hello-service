const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const name = req.query.name || 'World';
    const message = req.query.message || 'Hello';
    res.send(`Hello ${name}! ${message}!`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});