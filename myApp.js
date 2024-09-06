let express = require('express');
let app = express();

// ---------+
// Task #1  +
// ---------+

app.get('/', (req, res) => {
    console.log('Hello World');
    console.log('sending Hello Express to the screen');
    res.send('Hello Express');
  });
  



































 module.exports = app;
