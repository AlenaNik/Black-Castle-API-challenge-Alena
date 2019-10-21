# REST API implementation

This is a Game of Thrones inspired REST API game. You are responsible to create the engine of the game.

## My tasks

1. Implement the endpoints in **./src/api.js** file with the most suitable code for players and objects management REST API. You will find detailed instructions in this file. **Done**
2. Write some tests for your code. Use test folder for this purpose. **Done**
3. Answer all commented questions you find in the code. **Done**

### Required endpoints

You have to create endpoints (as many as you consider) to support the following functionality:

1. List all players. (GET) **Done**
2. Create player: adds a new player to data source. (POST) **Done**
3. Get player by id: returns the player for the given id. (GET) **Done**
4. Arm a player with an object in its bag. (GET) 
5. Kill a player: sets player health to 0. (PUT) **Done**
6. Create object: adds a new object to data source. (POST) **Done**
7. Get object by id: returns the object for the given id. (GET) **Done**
8. Upgrade object: increase/descrease the value of the object given by id with a new value (PUT)
9. Destroy object: remove an object from available objects (DELETE) **Almost done :)**

**Bonus:**

1. Include a postman collection in utils folder to test the app. **Done**
2. Add basic authentication to /api path. **Done**

**It was the first time for me building an API with REST API methods. I learned a lot and enjoyed the process of applying knowlendge into practice (throught, I haven't make every route working correctly, I'm planning to be back to code and finish it)**

## How to run the application using a local server

To run the project, open a terminal and execute the following command from project root path:

Install dependencies

> yarn

Start a local server

> yarn start

A local server will start on port 8080.

> http://localhost:8080

## How to run the application using Docker

Build the image:

> docker build -t <your username>/payvision-frontend-blackcastle .

Run the image on localhost port 8081:

> docker run -p 8081:8080 -d <your username>/payvision-frontend-blackcastle

Enter the container:

> docker exec -it <container id> sh

Print logs:

> docker logs <container id>
> docker logs -f --tail 10 <container id>
