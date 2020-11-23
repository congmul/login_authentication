const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
    res.send("Main Page");
});

app.listen(PORT, () =>{
    console.log("App listening on PORT " + PORT);
});

