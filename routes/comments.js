const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

router
    .route("/")
    .get((req, res) => {
    res.json(comments);
})

module.exports = router;