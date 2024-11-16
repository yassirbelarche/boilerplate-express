let express = require('express');
let app = express();
const bodyParser=require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}))

const absoluteAssetPath=__dirname+'/public';
app.use((req,res,next)=>{
    // method path - ip
    console.log(req.method+" "+req.path+" "+"-"+" "+req.ip);
    next();
})
app.use('/public',express.static(absoluteAssetPath));

app.get('/now',(req,res,next)=>{
    req.time=new Date().toString();
    next();
},(req,res)=>{
    res.json({time:req.time});
})



app.get('/:word/echo',(req,res)=>{
    res.json({echo:req.params.word});
})

app.route('/name')
.get((req,res)=>{
    res.json({name:`${req.query.first} ${req.query.last}`});

})
.post((req,res)=>{
    res.json({name:`${req.body.first} ${req.body.last}`});
    console.log('Post Hitted...')    
})



app.get('/',(req,res)=>{
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

app.get('/json',(req,res)=>{
    if (process.env.MESSAGE_STYLE==='uppercase') {

    res.json({message: 'HELLO JSON'});
    }else{
        res.json({message: 'Hello json'});
    }
    
})





































 module.exports = app;
