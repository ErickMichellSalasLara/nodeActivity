// import module express
const express = require('express');

const users = [];

// Create a instance
const app = express();

// Middleware
app.use(express.json());

// Endpoint GET
app.get("/user", (request, response) => {
    response.send(users);
});

app.get("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find(user => user.id === id);
    response.send(userFound);
});

app.put("/user/:id", (request, response) => {
    const id = request.params.id;
    const requestPsw = request.body.password;
    const requestUserName = request.body.username;
    const userFound = users.find(user => user.id === id);
    userFound.pwd = requestPsw;
    userFound.username = requestUserName;
    response.send("Users update succesfully");
});

app.delete("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find(user => user.id === id);
    users.splice(users.indexOf(userFound), 1);
    response.send("User deleted successfully");
});

// Endpoint POST
app.post("/user", (request, response) => {
    users.push(request.body);
    console.log(users);
    response.send("User added successfully");
});

// Tell the app that listen on port 3000
app.listen(3000, () => {
    console.log("My app is running");
});

