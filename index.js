const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
/* 
const handler = (req, res) => {
    res.send("Hye");
}
 */
app.get('/', (req, res) => {
    res.send("Hye, there. I'm learning Node & Express! It's Exciting!!!");
});

app.listen(port, (req) => {
    console.log("listening to port", port);
});