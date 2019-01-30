const express = require('express');
const app = express();

app.use('/store', (req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/store', (req, res) => {
    console.log('To jest sklep');
});

const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Przykładowa aplikacja nasłuchuje na http://${host} : ${port}`);
});