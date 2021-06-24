const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Passport
const jwt = require("jsonwebtoken");
const passport = require("passport");

const secrets = require("./secrets");
const dbConnection = require("./db-connector");

require("./authentication");

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
app.get(
  "/positions",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const results = await dbConnection.read("positions");
    res.send(results);
  }
);

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
  let dbResponse = await dbConnection.count(
    "votes",
    { positionId: req.params.id },
    "vote"
  );
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

/*
 *
 * --- USERS ---
 *
 */

// GET ALL USERS
app.get("/users", async (req, res) => {
  const results = await dbConnection.read("users");
  res.send(results);
});

app.get("/users/:id/positions", async (req, res) => {
  const results = await dbConnection.read("");
  res.send(results);
});

/*
 *
 * --- AUTHENTICATION USERS ---
 *
 */
// CREATE AUTH USER
app.put("/authUser", async (req, res) => {
  const authUser = {
    email: req.body.email,
    password: req.body.password,
  };
  let dbResponse = await dbConnection.create("authUsers", authUser);
  res.send(dbResponse);
});

/*
 *
 * --- LOGIN ---
 *
 */
// LOGIN
app.post("/login", async (req, res) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      console.log(err, user)
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents
      // of user object and return it in the response
      const token = jwt.sign({ email: user.email }, secrets.jwtToken);
      return res.json(token);
    });
  })(req, res);
});

/*
 *
 * --- Starting the server ---
 *
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
