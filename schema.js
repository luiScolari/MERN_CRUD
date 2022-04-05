const mongoose = require('mongoose');
const {Schema} = mongoose;

const tweetSchema = new Schema({
    username: String,
    text: String
})

module.exports = mongoose.model('Tweet', tweetSchema)

