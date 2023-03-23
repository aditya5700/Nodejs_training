
const restify = require('restify');
const errors = require('restify-errors');
const port = process.env.PORT || 2000;
const controller = require('./products.controller');

const server = restify.createServer({
    name: 'restify headstart',
});

server.use(restify.plugins.bodyParser());

server.pre(( req, res, next ) => {
    console.info(`${req.method} - ${req.url}`);
});

server.get('/api/products', (req, res, next) =>{
    res.send(200, controller.getAll());
    return next();
} );

server.post('/api/prodcuts', (req, res, next) =>{
    if(!req.body || !req.body.name || !req.body.id){
        return next(new errors.BadRequestError());
    } 
    controller.create(+req.body.id. req.body.name);
    res.send(201);
    return next();
});
server.listen(port, ()=>{
    console.info(`api is running on port ${port}`);
});



