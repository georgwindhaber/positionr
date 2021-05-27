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
  res.send("Hello World! This is Position R!");
});

/*
 *
 * --- POSITIONS ---
 *
 */

// GET POSITION
app.get("/positions/:id", async (req, res) => {
  const result = await dbConnection.readById("positions", req.params.id);
  res.send(result);
});

// GET ALL POSITIONS
app.get("/positions", async (req, res) => {
  const results = await dbConnection.read("positions");
  res.send(results);
});

// CREATE POSITION
app.put("/positions", async (req, res) => {
  const position = {
    title: req.body.title,
    excerpt: req.body.excerpt,
    description: req.body.description,
  };
  let dbResponse = await dbConnection.create("positions", position);
  res.send(dbResponse);
});

// UPDATE POSITION
app.put("/positions/:id", async (req, res) => {
  const position = {
    title: req.body.title,
    excerpt: req.body.excerpt,
    description: req.body.description,
  };
  let dbResponse = await dbConnection.update(
    "positions",
    req.params.id,
    position
  );
  res.send(dbResponse);
});

// DELETE POSITION
app.delete("/positions/:id", async (req, res) => {
  let dbResponse = await dbConnection.delete("positions", req.params.id);
  res.send(dbResponse);
});

// GET VOTES FOR POSITION
app.get("/positions/:id/votes", async (req, res) => {
  let dbResponse = await dbConnection.count("votes", "vote");
  res.send(dbResponse);
});

/*
 *
 * --- VOTES ---
 *
 */

// CREATE VOTE
app.put("/votes", async (req, res) => {
  const vote = {
    positionId: req.body.positionId,
    vote: req.body.vote,
  };
  let dbResponse = await dbConnection.create("votes", vote);
  res.send(dbResponse);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
