const express = require('express');
const router = express.Router();
const connection = require('../database');

// Generate A single Tingle

router.get('/tile/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    var longtitude = req.params.longtitude;
    var latitude = req.params.latitude;
  
    connection.query(
        "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longtitude, longtitude, latitude, latitude],
        function(error, results, fields) {
          if (error) {
            throw error;
          } else {
            if (res.json(results)!="[]"){
                makeTheTile();
            }
          }
        }
    );
  });

  function makeTheTile(){
      
  }

  module.exports = router;