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
    .get("/:id", (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
            res.status(200).json(user);
        } else {
            next();
        } 
    }) 
    .delete("/:id", (req, res, next) => {
        const id = req.params.id;
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index || index === 0) {
            users.splice(index, 1);
            res.json({status: 204, message: "User deleted"});
        } else {
            next();
        } 
        })

    .patch 
    ("/:id", (req, res) => {
        const id = req.params.id;
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index || index === 0) {
        users[index].username = req.body.username;
        users[index].email = req.body.email;
        users[index].firstName = req.body.firstName;
        res.status(200).json(users[index]);
        } else {
            next();
        } 

    })

    


module.exports = router;