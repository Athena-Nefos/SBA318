const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

router
    .route("/")
    .get((req, res) => {
    res.json(posts);
})

router
.get("/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    if (post) {
        res.status(200).json(post);
    } else {
        next();
    } 
})

.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    const index = posts.findIndex(post => post.id === parseInt(id));
    if (index || index === 0) {
        posts.splice(index, 1);
        res.json({status: 204, message: "Post deleted"});
    } else {
        next();
    } 
    })

    

module.exports = router;