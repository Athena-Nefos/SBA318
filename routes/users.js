const express = require("express");
const router = express.Router();

const users = require("../data/users");

router
    .route("/")
    .get((req, res) => {
    res.json(users);
})

    .post((req, res) => {
        const newUser =  { 
            id: users.length + 1, 
            username: req.body.username, 
            email: req.body.email,
            firstName: req.body.firstName
        }
        users.push(newUser);
    res.status(201).json(newUser);
    })

    router 
    .delete("/:id", (req, res) => {
        const id = req.params.id;
        const index = users.findIndex(user => user.id === parseInt(id));
        users.splice(index, 1);
        res.status(204).send("json");
        })

    .patch 
    ("/:id", (req, res) => {
        const id = req.params.id;
        const index = users.findIndex(user => user.id === parseInt(id));
        users[index].username = req.body.username;
        users[index].email = req.body.email;
        users[index].firstName = req.body.firstName;
        res.status(200).json(users[index]);
    })

    


module.exports = router;