const express = require('express');

const configureMiddleware = require('./config/middleware.js')
const userRoutes = require('./users/userRoutes.js')
const postRoutes = require('./posts/postRoutes.js')
const friendRoutes = require('./friends/friendRoutes.js')

const server = express();

// middleware - order matters --- moved them to middleware.js
// server.use(helmet());
// server.use(express.json());
configureMiddleware(server);


function validate (req, res, next) {
    const name = req.body.name;
    if (!name) {
        next();
        } else {
            next('u12')
        }
}

server.use('/users', userRoutes);
server.use('/posts', postRoutes);
server.use('/friends', friendRoutes);


// route handlers are middleware
server.post('/hello', (req,res, next) => {
    const name = req.body;
    res.status(200).json({ hello: req.body.name});
})

// Error handler
server.use(errorHandler) //key

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
server.listen(port, () => console.log(`\n== API running on http://localhost:${port} ==\n`));