// Here schould be all routes for tiles
/*
TODO: JSON der Tiles bearbeiten, Zufallstile erzeugen
*/

const express = require('express');
const router = express.Router();
const connection = require('../database');

//MAINTENANCE - delete all rows in users
router.get('/deleteall', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "TRUNCATE TABLE `tiles`",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// GET a single tile (All)
router.get('/gettile/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    connection.query(
        "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ? LIMIT 1", [req.params.longtitude, req.params.longtitude, req.params.latitude, req.params.latitude],
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });

  // Get ressources from a Single Tile 
  router.get('/gettileressources/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    connection.query(
        "SELECT resources FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ? LIMIT 1", [req.params.longtitude, req.params.longtitude, req.params.latitude, req.params.latitude],
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });


// GET center and neighbours 
// TODO QUERY in Ordnung bringen
router.get('/getmoretiles/:longtitude/:latitude', function (req, res, next) {
    console.log('Request Type:', req.method);
    var longmax = parseFloat(req.params.longtitude) + 0.02;
    var longmin = req.params.longtitude - 0.02;
    var latmax = parseFloat(req.params.latitude) + 0.01;
    var latmin = req.params.latitude - 0.02;
    var sql = `(SELECT * 
    FROM tiles 
    WHERE tilesid >= (SELECT tilesid FROM tiles WHERE 
      longmax > ${req.params.longtitude} AND 
      longmin < ${req.params.longtitude} AND 
      latmax > ${req.params.latitude} AND 
      latmin < ${req.params.latitude}
    LIMIT 1)
    ORDER BY tilesid
    LIMIT 5)
    UNION
    (SELECT * 
    FROM tiles 
    WHERE tilesid < (SELECT tilesid FROM tiles WHERE 
      longmax > ${req.params.longtitude} AND 
      longmin < ${req.params.longtitude} AND 
      latmax > ${req.params.latitude} AND 
      latmin < ${req.params.latitude}
    LIMIT 1)
    ORDER BY tilesid
    LIMIT 5)
    ;
        `;
        console.log(sql);
        connection.query(sql,
          function(error, results, fields) {
            if (error) throw error;
            res.json(results);
          }
        );
  });
  

module.exports = router;