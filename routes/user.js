// ALL ROUTES FOR USER-STUFF
/*
- delete ALL
- Get a single user -> user/getuser/:userId
- Get Users Position -> user/getuserposition/:userId
- Get Users Name -> user/getusername/:userId 
- Get Users Health -> user/getuserhealth/:userId
- Get Users immunsystem -> user/getuserimmunsystem/:userId/:userId
- Get users Level -> user/getuserlevel/:userId
- Get Users Buildings (All) -> user//getuserbuildings/:userId
- Get Users Items (All) -> user/getuseritems/:userId
- Get Users Sellitems (All) -> user/getusersellitems/:userId
- Get Users Skills (All) -> user/getuserskills/:userId
- Delete a user -> user/deleteuser/:userId
- Create a new User -> user/newuser/:name
- Update Users health -> user/updateuserhealth/:userid/:health
- Update users strength -> user/updateuserstrength/:userid/:strength
- Update Users Level -> user/updateuserslevel/:userid/:level
- Update users position -> user/updateusersposition/:userid/:latitude/:longtitude
- Update users Buildings -> user (TODO)
- Update Users Items -> user (TODO)
- Update users Sellitems -> user (TODO)
- Update users Skills -> user (TODO)

- TODO: 
+ get part of json
+ update part of json
+ move part of json to other json
+ user initialisierung
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
  connection.query(
      "SELECT name, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Health
router.get('/getuserhealth/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT health, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

// Get Users Immunsystem
router.get('/getuserimmunsystem/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT immunsystem, userid FROM `users` WHERE userid = ?", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
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
      "SELECT hp, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT critchance, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT misschance, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT blockchance, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT basedamage, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT attackspeed, userid FROM `users` WHERE userid = ?", req.params.userId,
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

// Get user luck
router.get('/getuserluck/:userId', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "SELECT luck, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT influence, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT xp, userid FROM `users` WHERE userid = ?", req.params.userId,
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
      "SELECT intelligence, userid FROM `users` WHERE userid = ?", req.params.userId,
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
  var name = req.params.name;

  connection.query(
    "INSERT INTO users (name, health, immunsystem, longtitude, latitude, level, buildings, sellitems, items, skills, hp, armor, critchance, misschance, blockchance, basedamage, attackspeed, leadership, hygiene, luck, influence, xp, intelligence, charisma, fitness, npcs) VALUES ("+ "\'"+ name + "\'" + ", 10,5,5.00,5.88,1,NULL,NULL,NULL,NULL,0,0,0,0,0,0,0,0,10,0,0,0,0,-20,20,NULL)", [name],
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

// update Users immunsystem
router.get('/updateuserimmunsystem/:userid/:immunsystem', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET immunsystem = immunsystem + ? WHERE userid = ?", [req.params.immunsystem, req.params.userid],
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
      "UPDATE `users` SET hp = hp + ? WHERE userid = ?", [req.params.hp, req.params.userid],
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
      "UPDATE `users` SET critchance  = critchance  + ? WHERE userid = ?", [req.params.critchance, req.params.userid],
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
      "UPDATE `users` SET misschance  = misschance  + ? WHERE userid = ?", [req.params.misschance, req.params.userid],
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
      "UPDATE `users` SET blockchance  = blockchance + ? WHERE userid = ?", [req.params.blockchance, req.params.userid],
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
      "UPDATE `users` SET basedamage  = basedamage + ? WHERE userid = ?", [req.params.basedamage, req.params.userid],
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
      "UPDATE `users` SET attackspeed  = attackspeed + ? WHERE userid = ?", [req.params.attackspeed, req.params.userid],
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

// update users luck
router.get('/updateuserluck/:userid/:luck', function (req, res, next) {
  console.log('Request Type:', req.method);
  connection.query(
      "UPDATE `users` SET luck  = luck + ? WHERE userid = ?", [req.params.luck, req.params.userid],
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
      "UPDATE `users` SET influence  = influence + ? WHERE userid = ?", [req.params.influence, req.params.userid],
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
      "UPDATE `users` SET xp  = xp + ? WHERE userid = ?", [req.params.xp, req.params.userid],
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
      "UPDATE `users` SET intelligence  = intelligence + ? WHERE userid = ?", [req.params.intelligence, req.params.userid],
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