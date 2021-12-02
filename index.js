require('dotenv').config();
const express = require('express');

const server = express(); // why is this needed vs line 2

server.get('/api/users', (req,res) => {
    res.json([
        { id: 1, username: 'me' },
        { id: 2, username: 'myself' },
        { id: 3, username: 'i' },
    ])
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`\n*** Server started and listening on port ${PORT} ***`)
})