
// const restify = require('restify');
// const errors = require('restify-errors');
// const port = process.env.PORT || 2000;
// const controller = require('./products.controller');

// const server = restify.createServer({
//     name: 'restify headstart',
// });

// server.use(restify.plugins.bodyParser());

// server.pre(( req, res, next ) => {
//     console.info(`${req.method} - ${req.url}`);
// });

// server.get('/api/products', (req, res, next) =>{
//     res.send(200, controller.getAll());
//     return next();
// } );

// server.post('/api/prodcuts', (req, res, next) =>{
//     if(!req.body || !req.body.name || !req.body.id){
//         return next(new errors.BadRequestError());
//     } 
//     controller.create(+req.body.id. req.body.name);
//     res.send(201);
//     return next();
// });
// server.listen(port, ()=>{
//     console.info(`api is running on port ${port}`);
// });

// const restify = require("restify");

// const server = restify.createServer();

// server.use(restify.plugins.bodyParser());

// server.get("/", (req, res,next )=>{
//      res.send("Hello World");
//       next()});
//       server.post('/endpoint', function (req, res, next)
//        { const data = req.body; console.log(data);
//          res.send(data); return next();});
//         server.listen(5000, () =>
//          { console.log(`Server is running on port 5000.`);});

const restify = require('restify');

const server = restify.createServer({
    name: 'my-api-server'
});

const input = {

    1: {
        name: 'Aditya Yadav',
        age: 22
    },

    2: {
        name: 'Abhishek Verma',
        age: 35,
        
    },
}
server.get('/hello', (req, res, next) => {
    res.send('Hello, world!');
});


server.get('*', (req, res, next) => {
    res.send('Not found');
});


server.listen(3000, () => {
    console.log('Server started on port 3000');
});

server.get('/input/:id', (req, res, next) => {

    const id = req.params.id
    const record = input[id]

    if (record) {
        res.send(record)
    } else {
        res.status(404)
        res.send({ error: 'Record not found' })
    }

    return next()

})





