let express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
let app = express();





app.get("/",(req, res) =>{
  res.sendFile(absolutePath = __dirname + '/views/index.html');
}
);

app.use('/public', express.static(__dirname + '/public'));


//console.log('Hello World');


app.get("/json", (req, res) =>{

  if(process.env.MESSAGE_STYLE="uppercase") {

    res.json(
      {"message": "HELLO JSON"}
    )
  }
  else

  res.json(
    {"message": "Hello json"}
  )
});



















 module.exports = app;
