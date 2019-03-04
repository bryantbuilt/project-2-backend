const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    location: [{
        type: Schema.Types.ObjectId,
        ref: 'City'
    }],
    poster: [{ 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    title: String,
    date: String,
    body: String,
    image: String
})

module.exports = mongoose.model('Post', PostSchema)