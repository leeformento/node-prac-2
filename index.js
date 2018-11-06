const express = require('express');
const helmet = require('helmet');

const server = express();

// middleware - order matters
server.use(helmet());
server.use(express.json());


function validate (req, res, next) {
    const name = req.body.name;
    if (!name) {
        next();
        } else {
            next('u12')
        }
}
// route handlers are middleware
server.post('/hello', validate, (req,res, next) => {
    const name = req.body;
    res.status(200).json({ hello: req.body.name});
})

// Error handler
server.use(errorHandler) // key

function errorHandler(err, req, res, next) {
    console.log('handling error');
     const errors = {
        u12: {
            httpCode: 422,
            title: 'Required Field',
            description: 'The name must be specified',
            recoveryInstructions: 'Please provide a name and try again',
            icon: 'error.svg'
        },
        u13: {
            message: 'The e-mail you provided already exists'
        },
        u401: {
            httpCode: 401,
            message: 'You are not logged in, please login and try again'
        },
        u403: {
            message: 'You have no access to this information'
        },
        s00: {
            message: 'Unknown server error'
        },
    };
    const error = errors[err];
    res.status(error.httpCode).json(error); 
}

const port = process.env.PORT || 8290
//start server
server.listen(port, () => console.log(`\n== API running on http://localhost:${port} ==\n`))

// types of middleware:
// - build in
// - third party
// - custom 
// - error handling (err, req, res, next) => {}

// homies
// duo > trio > quartet

// Application Mode
// Way to move regular mode to error mode
// - Error
// - Regular

// RULES: 
// [rm1] =next(new Error(something)> [rm2] =next()> [em1] =next()> [em2] => [rmn]

// calling next() moves to the next regular middleware
// calling next(arg) moves to the error regular middleware

// .then and .catch(err=> next(err))
// err = {
//     u12: {
//         httpCode: 422,
//         message: 'Name must be specified'
//     }
// }

// all middleware

// all the route handlers

// server.use(errorHandler)

// function errorHandler(err, req, res, next) {
// const code = err.code;
// // const response = { message: error} -- can have axios error 
// const error = errors[code] // get from file/fs/db
// res.status(err.httpCode).json(error)
// }

// next('u12')

// *************************** NEVER TRUST THE CLIENT *************************** 