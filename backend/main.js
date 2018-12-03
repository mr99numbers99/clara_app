const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');

// Link Routes with routes.js
app.use('/',router);
app.use('/week', router);
app.use('/query/:week/:class_id',router);


//last route
app.use('*', router);
app.listen(3000, () => {
  console.log('CSG Backend running on 3000');
});
