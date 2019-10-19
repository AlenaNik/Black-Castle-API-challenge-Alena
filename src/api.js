const { Router } = require("express");
const api = Router();

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

// ROUTE 01: /api/players               Returns a list of all players
api.get("/players", function(req, res) {
  res.status(200).json(players);
});

// ROUTE 02: /api/player             Create player: adds a new player to data source.
api.post("/player", function(req, res) {
  console.log(req.body);
  res.status(201).send({
    name: req.body.name,
    age: req.body.age,
  })
});
// ROUTE 03: /api/players:id            Get player by id: returns the player for the given id
api.get("/api/players/:id", (req, res) => {
  players.find({ id: req.params.id}, (err, result) => {
    if (err) console.log(err);
    res.json(result[0]);
  });
});

// ROUTE 04: /api/players/inside-bag           Arm a player with an object in its bag.(open the bag)
api.get("/api/players/bag", (req, res) => {

});

// ROUTE 05: /api/players/health         Update player health to 0 (Kill a player)
api.put("/api/players/bag", (req, res) => {

});

// ROUTE 06: /api/object           Adds a new object to data source
api.post("/object", function(req, res) {
  console.log(req.body);
  res.status(201).send({
    name: req.body.name,
    value: req.body.value,
  })
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
api.put("/api/objects/value", (req, res) => {

});

// ROUTE 11: /api/objects/:id          Delete an object
api.delete("/api/objects/value", (req, res) => {

});

module.exports = api;
