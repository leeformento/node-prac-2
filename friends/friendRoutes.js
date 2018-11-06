const express = require('express');

const router = express.Router();

router.get('/',  (req,res, next) => {
    res.send('GET /friends endpoint');
});

router.get('/:id',  (req,res, next) => {
    res.send('GET /friends/:id endpoint');
});

router.get('/:id/friends',  (req,res, next) => {
    res.send('GET /friends/:id/friends endpoint');
});

router.post('/', (req,res, next) => {
    res.send('POST /friends endpoint');
});

router.put('/:id', (req,res, next) => {
    res.send('PUT /friends/:id endpoint');
});

router.delete('/:id', (req,res, next) => {
    res.send('DELETE /friends/:id endpoint');
});

module.exports = router;