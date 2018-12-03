const express = require('express');
const router = express.Router();
const path = require('path');
const clara_api = require('./clara_api');
router.get('/', (req, res) => {
  res.send('/');
});

router.get('/week',(req, res) => {
  let week = clara_api.get_weeks(); 
  week.then((week_result) => {
    res.send(JSON.stringify(week_result));
  })

});

router.get('/query/:week/:class_id',(req,res) => {
  let class_id = req.params.class_id;
  let week = req.params.week;
  clara_api.query(week,class_id); 

  res.send('Working on the queries');
});

//this MUST be the last Route
router.get('*', (req, res) => {
  res.sendFile(__dirname + '/views/404.html');
  res.status(404);
  res.end;
});

module.exports = router;
