const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');

// Link Routes with routes.js
app.use('/',router);
app.use('/csg/woche', router);
app.use('/csg/request/:week/:classes',router);


//last route
app.use('*', router);
app.listen(3000, () => {
  console.log('CSG Backend running on 3000');
});
