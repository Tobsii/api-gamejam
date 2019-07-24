const express = require('express');
const router = express.Router();
const connection = require('../database');
const Promise = require('promise');


// Long: große Zahl , zb 48.468235
// lat: kleine zahl , zb 8.210345


router.get('/:longtitude/:latitude', function (req, res) {
    console.log('Request Type:', req.method);
    
    var anzahl = 0;
    var longtitude = req.params.longtitude;
    var latitude = req.params.latitude;

    // Rundet auf 3 Kommastellen und wirft den Rest weg, um die obere Rechte Ecke des Quadrates zu bekommen
    var longUpperCorner = (Math.round(longtitude*1000)/1000) - 0.05; 
    var latUpperCorner = (Math.round(latitude*1000)/1000) - 0.05;

    // Iteriere durch das Rechteck - speicher, wie viele Tiles davon leer sind und generiert werden müssen
    
    // VERSUCHE
    /*
    connection.query(
        "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longUpperCorner, longUpperCorner, latUpperCorner, latUpperCorner],
        function(error, results, fields) {
          if (error) throw error;
          if (res.json(results)!="[]"){
              anzahl+=1;
              console.log('Anzahl', anzahl);
          }
        }
      );

      function checkIfExist(){
        setTimeout(function() {
            connection.query(
                "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longUpperCorner, longUpperCorner, latUpperCorner, latUpperCorner],
                function(error, results, fields) {
                    if (error) throw error;
                    if (res.write(results)!="[]"){
                        anzahl+=1;
                        console.log('Anzahl', anzahl);
                        return nex;
                    }
                }
    
            );
        }, 2000);
      }


      var promiseArray = [];

      for (var i = 0; i <= 11; i++){
        for (var a = 0; a <= 11; a++){
            promiseArray.push(new Promise((resolve, reject) => 
            connection.query(
                "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longUpperCorner, longUpperCorner, latUpperCorner, latUpperCorner],
                function(error, results, fields) {
                if (error) reject(error);
                resolve(results);
            })))
        }
      }
    res.send(await Promise.all(promiseArray));
    console.log('PromiseArray', promiseArray);
    
    for (var i = 0; i <= 11; i++){
        for (var a = 0; a <= 11; a++){
            
            //checkIfExist();

            connection.query(
                "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longUpperCorner, longUpperCorner, latUpperCorner, latUpperCorner],
                function(error, results, fields) {
                    if (error) throw error;
                    if (res.write(results)!="[]"){
                        anzahl+=1;
                        console.log('Anzahl', anzahl);
                    }
                }
    
            );

            longUpperCorner+=0.05;
        }
        latUpperCorner+=0.05;
    }
    res.end();
    */

   function lookAtTiles() {
        return new Promise(function(resolve,reject) {
            connection.query(
                "SELECT * FROM `tiles` WHERE longmax > ? AND longmin < ? AND latmax > ? AND latmin < ?", [longUpperCorner, longUpperCorner, latUpperCorner, latUpperCorner],
                function(error, results, fields) {
                    if (error) throw error;1
                    resolve(results);
                }
    
            );
        });
    }
  
    async function msg() {
        var msg = await lookAtTiles();
        console.log('Message:', msg);
        console.log('Type of Message:', typeof(msg));
        console.log('Länge of Message:', Object.keys(msg).length);

        if(Object.keys(msg).length === 0)
            anzahl++;

        console.log('Anzahl:', anzahl);
    }

    for (var i = 0; i <= 11; i++){
        for (var a = 0; a <= 11; a++){
            msg();
            longUpperCorner+=0.05;
        }
        latUpperCorner+=0.05;
    }


    // iteriere nochmal und generiere Ressourcen
    function generateRessource(){

    }

    // Speichere jedes neue Tile in der Datenbank
  });
  

module.exports = router;