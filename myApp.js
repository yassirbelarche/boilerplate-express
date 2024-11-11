let express = require('express');
let app = express();
app.get('/', (req, res) => {
  // Respond with the string 'Hello Express'
  res.send('Hello Express');
});

// Export the app to be used in server.js
module.exports = app;



































 module.exports = app;
