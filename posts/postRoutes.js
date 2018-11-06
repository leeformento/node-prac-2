const express = require('express');

const router = express.Router();

router.get('/',  (req,res, next) => {
    res.send('GET /posts endpoint');
});

router.get('/:id',  (req,res, next) => {
    res.send('GET /posts/:id endpoint');
});

router.get('/:id/posts',  (req,res, next) => {
    res.send('GET /posts/:id/posts endpoint');
});

router.post('/', (req,res, next) => {
    res.send('POST /posts endpoint');
});

router.put('/:id', (req,res, next) => {
    res.send('PUT /posts/:id endpoint');
});

router.delete('/:id', (req,res, next) => {
    res.send('DELETE /posts/:id endpoint');
});

module.exports = router;