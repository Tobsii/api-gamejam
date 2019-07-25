const express = require('express');
const router = express.Router();
const connection = require('../database');
const Promise = require('promise');
const lerp = require('lerp');

// Long: große Zahl , zb 48.468235
// lat: kleine zahl , zb 8.210345

router.get('/:longtitude/:latitude', function (req, res) {
    console.log('Request Type:', req.method);
    
    var anzahl = 0;
    var longtitude = req.params.longtitude;
    var latitude = req.params.latitude;

    // Rundet auf 3 Kommastellen und wirft den Rest weg, um die obere Rechte Ecke des Quadrates zu bekommen
    var longUpperCorner = (Math.round(longtitude*1000)/1000) - 0.03; 
    var latUpperCorner = (Math.round(latitude*1000)/1000) - 0.03;

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
        console.log('Message von Look at Tile:', msg);
        console.log('Type of Message:', typeof(msg));
        console.log('Länge of Message:', Object.keys(msg).length);

        if(Object.keys(msg).length === 0)
            anzahl++;

        console.log('Anzahl:', anzahl);
    }

    for (var i = 0; i < 7; i++){
        for (var a = 0; a < 7; a++){
            msg();
            longUpperCorner+=0.01;
        }
        latUpperCorner+=0.01;
    }
    
/*
    // generiere Ressourcen für die unbelegen tiles
    var wald =  []; // 40 - 130
    var stein = [];  // 35 - 120
    var lehm =  []; // 20 - 70
    var eisen  =  []; // 10 - 50
    var kupfer  =  []; // 10 - 50 
    var gold  =  []; // 2 - 20
    var silber  =  []; // 5 - 25
    var schwefel  =  []; // 3 - 10
    var pech  =  []; // 1 - 25
    var weideland  =  []; //30 - 100
    var boden =  []; // 30 - 100
    var edelsteine =  []; // 1 - 5
    var wasser = []; // 70 - 140

    function generateRessource(min, max, theArray){
        for(var f = 0; f < anzahl; f++){
            var random = (Math.floor(Math.random() * 10) + 1)*0.1;
            var quantity = lerp(min, max, random);
            console.log('Random Lerp for Ressources:', random);
            theArray.push(quantity);
        }
    }

    generateRessource(40,99,wald);
    generateRessource(35,99,stein);
    generateRessource(20,70,lehm);
    generateRessource(10,50,eisen);
    generateRessource(10,50,kupfer);
    generateRessource(2,20,gold);
    generateRessource(5,25,silber);
    generateRessource(3,10,schwefel);
    generateRessource(1,25,pech);
    generateRessource(30,99, weideland);
    generateRessource(30, 99, boden);
    generateRessource(1, 5, edelsteine);
    generateRessource(70, 99, wasser);
    console.log('Generated:', wald[5]);

*/

    // Generate Ressources Simple
    function Randomize(min, max){
        return Math.floor(Math.random() * max) + min;
    }
    
    // "\'"+ name + "\'" -> Escape ANführungszeichen
    // Speichere jedes neue Tile in der Datenbank

    function generateATile(longmaxgenerate, longmingenerate, buildinggenerate, ressourcesgenerate, eventsgenerate, dungeonsgenerate, latmaxgenerate, latmingenerate) {
        var wald = Randomize(40, 99);
        var stein = Randomize(35, 99);
        var lehm = Randomize(20, 70);
        var kupfer = Randomize(10, 50);
        var schwefel = Randomize(3, 10);
        var eisen = Randomize(10, 50);
        var silber = Randomize(5, 25);
        var gold = Randomize(2, 20);
        var edelstein = Randomize(1, 5);
        return new Promise(function(resolve,reject) {
            var sql = `INSERT IGNORE INTO tiles (longmax, longmin, buildings, resources, events, dungeons, latmax, latmin)
            VALUES (
                ${longmaxgenerate} ,
                ${longmingenerate} ,
                NULL,
                JSON_OBJECT(
                    "wald",
                    ${wald},
                    "stein",
                    ${stein},
                    "lehm",
                    ${lehm},
                    "kupfer",
                    ${kupfer},
                    "schwefel",
                    ${schwefel},
                    "eisen",
                    ${eisen},
                    "silber",
                    ${silber},
                    "gold",
                    ${gold},
                    "edelstein",       
                    ${edelstein}
                    ),    
                NULL,
                NULL, 
                ${latmaxgenerate},
                ${latmingenerate}
            );
            
        `;
            console.log('SQL:', sql);

            connection.query(
                sql, [longmaxgenerate],
                function(error, results, fields) {
                    if (error) throw error;1
                    resolve(results.insertId);
                }
    
            );
        });
    }
  
    async function tile(longmaxtile, longmintile, latmaxtile, latmintile) {
        var answer = await lookAtTiles();
        console.log('Message Tile:', answer);
        if(Object.keys(answer).length === 0){
            // Generate Gessources
            // var ressourcen = generateRessourcesForTiles(); // for database items
            // var ressourceJSON = JSON.stringify(ressourcen);

            var nextanswer = await generateATile(longmaxtile, longmintile, {}, {}, {}, {}, latmaxtile, latmintile);

        }

        console.log('Message von Generate tile:', nextanswer);
    }

    // Reset long and lat
    longUpperCorner = (Math.round(longtitude*1000)/1000) - 0.03; 
    latUpperCorner = (Math.round(latitude*1000)/1000) - 0.03;
    console.log('Long:', longUpperCorner);
    console.log('Lat:', latUpperCorner);

    for (var r = 0; r < 7; r++){
        for (var a = 0; a < 7; a++){
            var longminForTile = longUpperCorner;
            var longmaxForTile = longUpperCorner + 0.01;
            var latmaxForTile = latUpperCorner + 0.1;
            var latminForTile= latUpperCorner;
            tile(longmaxForTile, longminForTile, latmaxForTile, latminForTile);
            longUpperCorner+=0.01;
            console.log('Second for Done:', longUpperCorner);
        }
        latUpperCorner+=0.01;
    }

    /*function generateRessourcesForTiles(){
        var tempRessources = {};
        tempRessources.wald = wald[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.stein = stein[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.lehm = lehm[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.eisen = eisen[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.kupfer = kupfer[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.gold = gold[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.silber = silber[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.schwefel = schwefel[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.pech = pech[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.weideland = weideland[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.boden = boden[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.edelsteine = edelsteine[Math.floor(Math.random() * anzahl) + 1];
        tempRessources.wasser = wasser[Math.floor(Math.random() * anzahl) + 1];

        return tempRessources;
    }
    */
  });

module.exports = router;