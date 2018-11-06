const express = require('express');

const router = express.Router();
// can have routes and middleware. mini express app but cant listen directly.

// router.use(userOnlyMiddleware) // for users only

//handles url beginning with /users
router.get('/',  (req,res, next) => {
    res.send('GET /users endpoint');
});

router.get('/:id',  (req,res, next) => {
    res.send('GET /users/:id endpoint');
});

router.get('/:id/posts',  (req,res, next) => {
    res.send('GET /users/:id/posts endpoint');
});

router.post('/', (req,res, next) => {
    res.send('POST /users endpoint');
});

router.put('/:id', (req,res, next) => {
    res.send('PUT /users/:id endpoint');
});

router.delete('/:id', (req,res, next) => {
    res.send('DELETE /users/:id endpoint');
});

module.exports = router;