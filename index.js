const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//require routes for users/posts/comments
const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

// parsing Middleware
app.use(bodyParser.json({extended: true }));


//routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/comments", comments);






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});