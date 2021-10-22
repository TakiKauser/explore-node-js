const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

/* 
const handler = (req, res) => {
    res.send("Hye");
}
 */
app.get('/', (req, res) => {
    res.send("Hye, there. I'm learning Node & Express! It's Exciting!!!");
});

const users = [
    { id: 0, name: "kb0", email: "kb0@yahoo.com", phone: "01xxx083370" },
    { id: 1, name: "kb1", email: "kb1@yahoo.com", phone: "01xxx083371" },
    { id: 2, name: "kb2", email: "kb2@yahoo.com", phone: "01xxx083372" },
    { id: 3, name: "kb3", email: "kb3@yahoo.com", phone: "01xxx083373" },
    { id: 4, name: "kb4", email: "kb4@yahoo.com", phone: "01xxx083374" },
    { id: 5, name: "kb5", email: "kb5@yahoo.com", phone: "01xxx083375" },
    { id: 6, name: "kb6", email: "kb6@yahoo.com", phone: "01xxx083376" },
    { id: 7, name: "kb7", email: "kb7@yahoo.com", phone: "01xxx083377" }
]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.params.id);
    res.send(user);
});

app.get('/sports/football/brazil', (req, res) => {
    res.send("Pele");
});

app.listen(port, (req) => {
    console.log("listening to port", port);
});