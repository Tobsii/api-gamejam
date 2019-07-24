// Here schould be all routes for tiles
/*
- Get Single Tile -> tiles/gettile/:longtitude/:latitude
- Get tile and neighbours - tiles/getmoretiles/:longtitude/:latitude (TODO)

TODO: JSON der Tiles bearbeiten, Zufallstile erzeugen
*/

const express = require('express');
const router = express.Router();
const connection = require('../database');

// GET a single tile 
router.get('/gettile/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    connection.query(
        "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [req.params.longtitude, req.params.longtitude, req.params.latitude, req.params.latitude],
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });

// GET center and neighbours 
// TODO Query anpassen, anzahl tiles als variablen?
router.get('/getmoretiles/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    var longmax = req.params.longtitude + 0.0;
    var longmin = req.params.longtitude - 0.0;
    var latmax = 0.0;
    var latmin = 0.0;
    connection.query(
        "SELECT * FROM `tiles` WHERE longtitude BETWEEN ? AND ? AND latitude BETWEEN ? AND ?", [longmin, longmax, latmin, latmax],
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });

  // TODO : Generate a Tile 

  

module.exports = router;