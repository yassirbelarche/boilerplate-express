let bodyParser = require('body-parser')
require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// })

app.use(function(req,res, next) {
    method = req.method;
    path = req.path;
    ip = req.ip;
    console.log(method + " " + path + " " + "-" + "" + ip);
    next();
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public', express.static(__dirname +'/public'))

app.get('/json', function(req, res) {
    // res.json({"message" : "Hello json"});
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message" : "Hello json".toUpperCase()});
    }
    else {
        res.json({"message" : "Hello json"});
    }
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();  // Hypothetical synchronous operation
    next();
  }, function(req, res) {
    res.send({time : req.time});
})

app.get('/:word/echo', (req, res, next) => {
    word = req.params.word;
    res.json({echo : word});
    next();
})

app.route('/name')
.get((req, res) => {
    firstname = req.query.first;
    lastname = req.query.last;
    res.json({name : `${firstname} ${lastname}`});
})
.post((req, res) => {
    firstname = req.body.first;
    lastname = req.body.last;
    res.json({name : `${firstname} ${lastname}`});
})





































 module.exports = app;
