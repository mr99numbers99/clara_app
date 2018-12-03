const express = require('express');
const router = express.Router();
const path = require('path');
const clara_api = require('./clara_api');
router.get('/', (req, res) => {
  res.send('/');
});

router.get('/csg/woche',(req, res) => {
  let week = clara_api.get_weeks(); 
  week.then((week_result) => {
    res.send(JSON.stringify(week_result));
  })

});

router.get('/csg/request/:week/:classes',(req,res) => {
  let classes = req.params.classes;
  let week = req.params.week;
  clara_api.query(week,classes); 
});

//this MUST be the last Route
router.get('*', (req, res) => {
  res.sendFile(__dirname + '/views/404.html');
  res.status(404);
  res.end;
});

module.exports = router;
