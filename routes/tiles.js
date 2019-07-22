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
        "SELECT * FROM `tiles` WHERE longtitude = ? AND latitude = ?", [req.params.longtitude, req.params.latitude],
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
    // TODO oder man geht über die IDs, also erst get ID des ortes, dann get angrenzende reihen
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

module.exports = router;