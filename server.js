const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Tweets = require("./schema");

const { v4: uuidv4 } = require("uuid");

const jao = uuidv4();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/reactCRUD", {})
  .then((data) => {
    console.log("mongoose working");
  })
  .catch((err) => {
    console.log("mongoose error");
    console.log(err);
  });

app.get("/tweets/api", async (req, res) => {
  const tweets = await Tweets.find({});
  res.send(tweets);
});

app.patch("/tweets/api/:id", async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;

  await Tweets.findByIdAndUpdate(id, { text });
});

app.post("/tweets/api/new", async (req, res) => {
  const { username, text } = req.body;
  if (username && text) {
    const newTweet = new Tweets(req.body);
    newTweet.save();
  } else {
    console.log("Throw error"); // Throw some error later
  }
});

app.listen(5000, () => {
  console.log("listening to port 5000");
});
