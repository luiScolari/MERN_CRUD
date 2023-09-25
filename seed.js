const mongoose = require("mongoose");
const Tweets = require("./schema");

mongoose
  .connect("mongodb://localhost:27017/reactCRUD", {})
  .then((data) => {
    console.log("mongoose working");
  })
  .catch((err) => {
    console.log("something went wrong");
    console.log(err);
  });

const seedDb = async () => {
  await Tweets.deleteMany();

  Tweets.insertMany([
    {
      username: "joaozin",
      text: "Eu como cenoura",
    },
    {
      username: "mariazinha",
      text: "garrafa de água",
    },
  ]);
};

seedDb();
