const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Tweets = require("./schema");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/reactCRUD", {})
  .then((data) => {
    console.log("mongoose working");
  })
  .catch((err) => {
    console.log("mongoose error");
    console.log(err);
  });

app.get("/tweets", async (req, res) => {
  try {
    const tweets = await Tweets.find({});
    res.send(tweets);
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.patch("/tweets/:id", async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.params;
    await Tweets.findByIdAndUpdate(id, { text });
    res.send("Tweet updated");
  } catch (e) {
    console.log("Error: ", e);
  }
});

app.post("/tweets/new", async (req, res) => {
  try {
    const newTweet = new Tweets(req.body);
    await newTweet.save();
    res.send("New tweet saved");
  } catch (e) {
    console.log("Error: ", e);
  }
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("listening to port 5000");
});
