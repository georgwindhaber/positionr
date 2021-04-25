const express = require("express");
const app = express();
const port = 3001;

const dbConnection = require("./db-connector")


// Parse json bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET POSITION
app.get("/position/:id", (req, res) => {
  res.send("Position " + req.params.id);
});

// CREATE POSITION
app.put("/position", (req, res) => {
  dbConnection.create("positions", req.body)
  res.send("Created " + req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
