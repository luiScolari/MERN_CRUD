const express = require("express");
const app = express();
const mongoose = require('mongoose');

const Tweets = require('./schema')

const { v4: uuidv4 } = require('uuid');

const jao = uuidv4()

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/reactCRUD', {})
    .then(data => {
        console.log('mongoose working')
    }).catch(err => {
        console.log('mongoose error')
        console.log(err)
    })

// app.get('/tweets/:id', async(req, res) => {
//     const { id } = req.params
//     const findedTweet = await Tweets.findById(id)
//     console.log(findedTweet)
//     // res.send(findedTweet)
// })

app.get('/tweets/api', async (req, res) => {
    const tweets = await Tweets.find({})
    res.send(tweets)
})

app.get('/tweets/api/:id', async (req, res) => {
    // console.log(req.params)
    const { id } = req.params
    console.log(id)
    const findedTweet = await Tweets.findById(id)
    console.log(findedTweet)
    res.send(findedTweet)
})

app.post('/new', async (req, res) => {
    const newTweet = await new Tweets(req.body)
    newTweet.save()
    res.redirect('/tweets')
})

app.listen(5000, () => {
    console.log('listening to port 5000')
})