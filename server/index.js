const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const dbConnection = require("./db-connector");

// Allow CORS
app.use(cors());

// Parse json bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET POSITION
app.get("/position/:id", (req, res) => {
  res.send("Position " + req.params.id);
});

// GET ALL POSITIONS
app.get("/position", async (req, res) => {
  const results = await dbConnection.read("positions")
  res.send(results)
})

// CREATE POSITION
app.put("/position", (req, res) => {
  const position = {
    title: req.body.title,
    excerpt: req.body.excerpt,
    description: req.body.description,
  };
  dbConnection.create("positions", position);
  res.send("Created " + req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
