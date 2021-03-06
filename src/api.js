const { Router } = require("express");
const api = Router();
// const _ = require('lodash');

// Data Source
const database = {
  players: [
    { id: 1, name: "Jon Snow", age: 23, health: 100, bag: [1] },
    { id: 2, name: "Littlefinger", age: 35, health: 100, bag: [2] },
    { id: 3, name: "Daenerys Targaryen", age: 20, health: 100, bag: [3] },
    { id: 4, name: "Samwell Tarly", age: 18, health: 100, bag: [4] }
  ],
  objects: [
    { id: 1, name: "spoon", value: -1 },
    { id: 2, name: "knife", value: -10 },
    { id: 3, name: "sword", value: -20 },
    { id: 4, name: "potion", value: +20 }
  ],
  users: [
    { id: 1, name: "Alena", email: "alena@gmail.com", password: "123", entries: 0 },
    { id: 2, name: "Sally", email: "sally@gmail.com", password: "124", entries: 2 }
    // since the auth structure is a bonus and it's basic, I haven't used bcrypt or JWT for auth and store hash
    // or password + salt to my database, that I would normally do :)
  ]
};

// Setting up my routes

// ROUTE 01: /api/players               Returns a list of all players
api.get("/players", function(req, res) {
  res.status(200).json(database.players);
});

// ROUTE 02: /api/player             Create player: adds a new player to data source.
api.post("/player", function(req, res) {
  const { id, name, age, health, bag } = req.body;
  database.players.push({
    id: id,
    name: name,
    age: age,
    health: health,
    bag: [bag],
  });
  res.json(database.players[database.players.length-1]);
});

// ROUTE 03: /api/players:id            Get player by id: returns the player for the given id
api.get("/player/:id", (req, res) => {
 const { id } = Number(req.params);
 let found = false;
  database.players.forEach(player => {
    if (player.id === id) {
      found = true;
      return res.json(player);
    }
  })
  if (!found) {
    res.status(400).json('It\'s not found');
  }
});

// ROUTE 04: /api/players/bag          Arm a player with an object in its bag.(open the bag)
api.get("/player/bag", (req, res) => {

});

// ROUTE 05: /api/:id/health         Update player health to 0 (Kill a player)
api.patch("/player/:id/health", (req, res) => {
  //   const { id } = req.params;
  //   const { health } = req.headers;
  // database.players.forEach(player => {
  //   if (player.id === id) {
  //     database.players.push({
  //       health: health }
  //  return res.json(database.players.id);
  //     });
});

// ROUTE 06: /api/object           Adds a new object to data source
api.post("/object", function(req, res) {
  const { id, name, value } = req.body;
  database.objects.push({
    id: id,
    name: name,
    value: value
  });
  res.json(database.objects[database.objects.length-1]);
});

// ROUTE 07: /api/objects           Get a list of all objects
api.get("/objects", function(req, res) {
  res.status(200).json(database.objects);
});

// ROUTE 08: /api/object/:id            Get object by id: returns the object for the given id
api.get("/object/:id", (req, res) => {
    console.log(req.params);
    const { id } = Number(req.params);
    let found = false;
    database.players.forEach(object => {
      if (object.id === id) {
        found = true;
        return res.json(object);
      }
    });
    if (!found) {
      res.status(400).json('It\'s not found');
    }
});


// ROUTE 10: /api/objects/id     Update value of an object
api.put("/objects/:id", (req, res ) => {
  const objectId = Number(req.params.id);
  const object = req.body;
  console.log("Editing item: ", objectId, " to be ", object);
  const updatedListOfObjects = [];
  console.log(updatedListOfObjects);
  // loop through list to find and replace one item
  database.objects.forEach(oldObject => {
    console.log(oldObject);
    console.log(objectId);
    if (oldObject.id === objectId) {
      updatedListOfObjects.push(object);
    } else {
      console.log('Doesn\'t exist');
    }
  });
  // replace old list with new one
  database.objects = updatedListOfObjects;
  res.json(updatedListOfObjects);
});

// ROUTE 11: /api/objects/:id          Delete an object
api.delete("/api/objects/:id", (req, res) => {
  const objectId = Number(req.params);
  console.log("Delete item with id: ", objectId);
  res.json(database.objects.splice(database.objects.findIndex(item => item.id == objectId),1));
});

// ROUTE 12: POST /api/signin          Sign-in to a database from front-end form
api.post('/signin', (req, res) => {
  if (req.headers.email === database.users[0].email
  && req.headers.password === database.users[0].password) {
    res.json('Success!');
  } else {
    res.status(400).json('Please, try again');
  }
});
// ROUTE 13: POST /api/register          Register to a database from front-end form
api.post('/register', (req, res) => {
  const {email, name, password } = req.body;
    database.users.push({
      id: 3,
      name: name,
      email: email,
      password: password,
      entries: 0
    });
  res.json(database.users[database.users.length-1]);
});

// ROUTE 14: GET /api/users        Sign-in to a database from front-end form
api.get('/users', (req, res) => {
  res.status(200).json(database.users);
});

module.exports = api;
