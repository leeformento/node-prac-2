
types of middleware:
- build in
- third party
- custom 
- error handling (err, req, res, next) => {}

homies
duo > trio > quartet

Application Mode
Way to move regular mode to error mode
- Error
- Regular

RULES: 
[rm1] =next(new Error(something)> [rm2] =next()> [em1] =next()> [em2] => [rmn]

calling next() moves to the next regular middleware
calling next(arg) moves to the error regular middleware

.then and .catch(err=> next(err))
err = {
    u12: {
        httpCode: 422,
        message: 'Name must be specified'
    }
}

all middleware

all the route handlers

server.use(errorHandler)

function errorHandler(err, req, res, next) {
const code = err.code;
// const response = { message: error} -- can have axios error 
const error = errors[code] // get from file/fs/db
res.status(err.httpCode).json(error)
}

next('u12')

*************************** NEVER TRUST THE CLIENT *************************** 

## Structuring our API
- by type (ie: actions, reducers, components -- containers, functional components) 
- by feature (ie: what am i handling? users, posts, friends) resource
- by hybrid

Patterns
- Model View Controller (MVC) Backend then frontend. Frameworks code in controller. Some outlayered. Logical layers.
- Model View Presenter (MVP) Assemble code in particular way. 
- Model View ViewModel (MVVM) Angular.


