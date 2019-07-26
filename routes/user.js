// ALL ROUTES FOR USER-STUFF
/*
- TODO: 
+ get part of json
+ update part of json
+ move part of json to other json
+ user Initialisierung
 */

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const connection = require('../database');


// middleware that is specific to this router (Beispiel)
// wird jedes mal ausgeführt, wenn eine user/... Url aufgerufen wird
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

//MAINTENANCE - delete all rows in users
router.get('/deleteall', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "TRUNCATE TABLE `users`",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// GET

// Get A single User via ID (All)
router.get('/getuser/:userId', function (req, res, next) {
    console.log('Request Type:', req.method);
    connection.query(
        "SELECT * FROM `users` WHERE userid = ?", req.params.userId,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });

  // NewUser For dev
  router.get('/newuserdev/', function (req, res, next) {
    console.log('Request Type:', req.method);
    var itemName      =req.body.itemName
    var description=req.body.description
     var itemCos=req.body.itemCos
     var iconCount=req.body.iconCount
     var isStackable=req.body.isStackable
     var isBuyable=req.body.isBuyable
     var itemType=req.body.itemType
     var iconTexture=req.body.iconTexture
     var leadership=req.body.leadership
     var infektion=req.body.infektion
     var hygiene=req.body.hygiene
     var einfluss=req.body.einfluss
     var erfahrung=req.body.erfahrung
     var intelligenz=req.body.intelligenz
     var charisma=req.body.charisma
     var level=req.body.level
     var fitness=req.body.fitness
     var longitude=req.body.longitude
     var latitude=req.body.latitude
     var hP=req.body.hP
     var armor=req.body.armor
     var critChance=req.body.critChance
     var missChance=req.body.missChance
     var blockChance=req.body.blockChance
     var damage=req.body.damage
     var attackSpeed=req.body.attackSpeed
    var sql = `UNSERT INTO users (
      itemName,
      description,
      itemCost,
      iconCount,
      isStackable,
      isBuyable,
      itemType,
      iconTexture,
      leadership,
      infektion,
      hygiene,
      einfluss,
      erfahrung,
      intelligenz,
      charisma,
      level,
      fitness,
      longitude,
      latitude,
      hP,
      armor,
      critChance,
      missChance, 
      blockChance,
      damage,
      attackSpeed )
    VALUES(\
    \'${itemName}\',
    \'${description}\',
      ${itemCost},
      ${iconCount},
      ${isStackable},
      ${isBuyable},
      \'${itemType}\',
      \'${iconTexture}\',
      ${leadership},
      ${infektion},
      ${hygiene},
      ${einfluss},
      ${erfahrung},
      ${intelligenz},
      ${charisma},
      ${level},
      ${fitness},
      ${longitude},
      ${latitude},
      ${hP},
      ${armor},
      ${critChance},
      ${missChance},
      ${blockChance},
      ${damage},
      ${attackSpeed}
    );`;
    connection.query(
        sql, req.params.userId,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });

  // Get User for serialization
  router.get('/getuserforserialization/:userId', function (req, res, next) {
    console.log('Request Type:', req.method);
    var sql = `SELECT 
      itemName,
      description,
      itemCost,
      iconCount,
      isStackable,
      isBuyable,
      itemType,
      iconTexture,
      leadership,
      infektion,
      hygiene,
      einfluss,
      erfahrung,
      intelligenz,
      charisma,
      level,
      fitness,
      longitude,
      latitude,
      hP,
      armor,
      critChance,
      missChance,
      blockChance,
      damage,
      attackSpeed
    FROM users WHERE userid = ?;`;
    connection.query(
        sql, req.params.userId,
        function(error, results, fields) {
          if (error) throw error;
          res.json(results);
        }
      );
  });


// Get Users Position
router.get('/getuserposition/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT longtitude, latitude, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Name
router.get('/getusername/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  res.set('Content-Type', 'application/json')
  // req.SetRequestHeader("Content-Type", "application/json");
  connection.query(
      "SELECT itemName, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        // res.json(results);
      }
    );
});

// Get Users Level
router.get('/getuserlevel/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT level, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Buildings (All)
router.get('/getuserbuildings/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT buildings, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Items (All)
router.get('/getuseritems/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT items, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

//Get Users Sellitems
router.get('/getusersellitems/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT sellitems, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Skills
router.get('/getuserskills/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT skills, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users hp
router.get('/getuserhp/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT hP, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users armor
router.get('/getuserarmor/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT armor, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users critchance
router.get('/getusercritchance/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT critChance, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users misschance
router.get('/getusermisschance/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT missChance, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user blockchance
router.get('/getuserblockchance/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT blockChance, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user basedamage
router.get('/getuserbasedamage/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT damage, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user attackspeed
router.get('/getuserattackspeed/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT attackSpeed, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user leadership
router.get('/getuserleadership/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT leadership, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user hygiene
router.get('/getuserhygiene/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT hygiene, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user influence
router.get('/getuserinfluence/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT einfluss, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user xp
router.get('/getuserxp/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT erfahrung, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user intelligence 
router.get('/getuserintelligence /:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT intelligenz, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user charisma  
router.get('/getusercharisma  /:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT charisma, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user fitness  
router.get('/getuserfitness  /:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT fitness, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get user npcs  
router.get('/getusernpcs  /:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT npcs, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// delete a user
router.get('/deleteuser/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "DELETE FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// create a new user
router.get('/newuser/:name', function (req, res, next) {
  console.log('Request Type:', req.method);
  var username = req.params.name;
  var sql = `INSERT INTO users (
    itemName, description, itemCost, iconCount, 
    isStackable, isBuyable, itemType, iconTexture, 
    leadership, infektion, hygiene, einfluss, 
    erfahrung, intelligenz, charisma, level, 
    fitness, longitude, latitude, hP, 
    armor, critChance, missChance, blockChance, 
    damage, attackSpeed, npcs, buildings, items, sellitems, skills)
  VALUES (
    \'${username}\',
    \'Lorem ipsum dolor sit amet, consetetur
      Lorem ipsum dolor sit amet, consetetur\',
      0.0,
      0,
      1,
      1,
      \'Character\',
      \'Character\',
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      48.0498543,
      8.210878,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      NULL,
      NULL,
      NULL,
      NULL,
      NULL
  ); 
`;
console.log(sql);
  connection.query(sql,
      function(error, results, fields) {
        if (error) {
          throw error;
        } else {
            // successfully inserted into db
        }
        res.json(results.insertId); 
      }
  );
});

// UPDATES

// update Users health
router.get('/updateuserhealth/:userid/:health', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET health = health + ? WHERE userid = ?", [req.params.health, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users level 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = level + ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users position 
router.get('/updateusersposition/:userid/:latitude/:longtitude', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET latitude = ?, longtitude = ? WHERE userid = ?", [req.params.latitude, req.params.longtitude, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users hp 
router.get('/updateuserhp/:userid/:hp', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET hP = hP + ? WHERE userid = ?", [req.params.hp, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users armor 
router.get('/updateuserarmor/:userid/:armor', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET armor = armor + ? WHERE userid = ?", [req.params.armor, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users critchance  
router.get('/updateusercritchance/:userid/:critchance', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET critChance  = critChance  + ? WHERE userid = ?", [req.params.critchance, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users misschance  
router.get('/updateusermisschance/:userid/:misschance', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET missChance  = missChance  + ? WHERE userid = ?", [req.params.misschance, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users blockchance  
router.get('/updateuserblockchance/:userid/:blockchance', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET blockChance  = blockChance + ? WHERE userid = ?", [req.params.blockchance, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users basedamage  
router.get('/updateuserbasedamage/:userid/:basedamage', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET damage  = damage + ? WHERE userid = ?", [req.params.basedamage, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users attackspeed
router.get('/updateuserattackspeed/:userid/:attackspeed', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET attackSpeed  = attackSpeed + ? WHERE userid = ?", [req.params.attackspeed, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users leadership
router.get('/updateuserleadership/:userid/:leadership', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET leadership  = leadership + ? WHERE userid = ?", [req.params.leadership, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users hygiene
router.get('/updateuserhygiene/:userid/:hygiene', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET hygiene  = hygiene + ? WHERE userid = ?", [req.params.hygiene, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users influence
router.get('/updateuserinfluence/:userid/:influence', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET einfluss  = einfluss + ? WHERE userid = ?", [req.params.influence, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users xp
router.get('/updateuserxp/:userid/:xp', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET erfahrung  = erfahrung + ? WHERE userid = ?", [req.params.xp, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users intelligence
router.get('/updateuserintelligence/:userid/:intelligence', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET intelligenz  = intelligenz + ? WHERE userid = ?", [req.params.intelligence, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users charisma
router.get('/updateusercharisma/:userid/:charisma', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET charisma  = charisma + ? WHERE userid = ?", [req.params.charisma, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users fitness
router.get('/updateuserfitness/:userid/:fitness', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET fitness  = fitness + ? WHERE userid = ?", [req.params.fitness, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users buildings TODO 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = level + ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users items TODO 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users sellitems TODO 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users skills TODO 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// update users NPCs TODO 
router.get('/updateuserslevel/:userid/:level', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET level = ? WHERE userid = ?", [req.params.level, req.params.userid],
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

module.exports = router;