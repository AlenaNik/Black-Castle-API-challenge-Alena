const { Router } = require("express");
const api = Router();
// const _ = require('lodash');

// This will be your data source
const players = [
  { id: 1, name: "Jon Snow", age: 23, health: 100, bag: [1] },
  { id: 2, name: "Littlefinger", age: 35, health: 100, bag: [2] },
  { id: 3, name: "Daenerys Targaryen", age: 20, health: 100, bag: [3] },
  { id: 4, name: "Samwell Tarly", age: 18, health: 100, bag: [4] }
];
const objects = [
  { id: 1, name: "spoon", value: -1 },
  { id: 2, name: "knife", value: -10 },
  { id: 3, name: "sword", value: -20 },
  { id: 4, name: "potion", value: +20 }
];

// Setting up my routes

// ROUTE 01: /api/players               Returns a list of all players
api.get("/players", function(req, res) {
  res.status(200).json(players);
});

// ROUTE 02: /api/player             Create player: adds a new player to data source.
api.post("/player", function(req, res, next) {
  players.push(req.body).then(function(player) {
    res.send(player)
  }).catch(next);
});
// ROUTE 03: /api/players:id            Get player by id: returns the player for the given id
api.get("/players/:id", (req, res, next) => {
  const playerId = req.params.id;
  console.log(playerId);
  const player = players.find(player => player.id === playerId);
  if (player) {
    res.json(players.id[playerId]);
  } else {
    res.json({ message: `Player ${playerId} doesn't exist`})
  }
});


// ROUTE 04: /api/players/inside-bag           Arm a player with an object in its bag.(open the bag)
api.get("/api/players/bag", (req, res) => {

});

// ROUTE 05: /api/players/health         Update player health to 0 (Kill a player)
api.put("/api/players/:id/health", (req, res) => {

});

// ROUTE 06: /api/object           Adds a new object to data source
api.post("/object", function(req, res, next) {
  objects.push(req.body).then(function(object) {
    res.send(object)
  }).catch(next);
});

// ROUTE 07: /api/objects           Get a list of all objects
api.get("/objects", function(req, res) {
  res.status(200).json(objects);
});

// ROUTE 08: /api/objects:id            Get object by id: returns the object for the given id
api.get("/api/objects/:id", (req, res) => {
  objects.find({ id: req.params.id}, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});

// ROUTE 09: /api/objects/:id            Get object by id: returns the object for the given id
api.get("/api/objects/:id", (req, res) => {
  objects.find({ id: req.params.id}, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});

// ROUTE 10: /api/objects/value        Update value of an object
api.put("/objects/:id", (req, res, next) => {
  const objectId = req.params.id;
  const object = req.body;
  console.log("Editing item: ", objectId, " to be ", object);
  const updatedListItems = [];
  // loop through list to find and replace one item
  objects.forEach(oldItem => {
    if (oldItem.id === objectId) {
      updatedListItems.push(object);
    } else {
      updatedListItems.push(oldItem);
    }
  });
  // replace old list with new one
  objects = updatedListItems;
  res.json(objects).catch(next);
});

// ROUTE 11: /api/objects/:id          Delete an object
api.delete("/api/objects/:id", (req, res, next) => {
  for (let object of this.objects) {
    if (id === object.id) {
      this.objects.splice(this.objects.indexOf(object), 1);
      break;
    }
  }
  console.log(object)
});

module.exports = api;
