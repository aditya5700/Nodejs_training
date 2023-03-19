const restify = require("restify");
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get("/", (req, res,next )=>{
    res.send("Hello World")
    next()
})

server.post('/post', function (req, res, next) {  
    const data = req.body; 
    console.log(data); 
    res.send(data); 
    return next();});

server.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});


 