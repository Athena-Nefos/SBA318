const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
    .route("/")
    .get((req, res) => {
    res.json(comments);
})

.post((req, res) => {
    const newComment =  {
        "id": comments.length +1,
        "username": req.body.username,
        "comment": req.body.comment,
        "timestamp": new Date().toString()
    }
    comments.push(newComment);
res.status(201).json(newComment);
})

router
.get("/:id", (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (comment) {
        res.status(200).json(comment);
    } else {
        next();
    } 
})

.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    if (index || index === 0) {
        comments.splice(index, 1);
        res.json({status: 204, message: "Comment deleted"});
    } else {
        next();
    }
});

module.exports = router;