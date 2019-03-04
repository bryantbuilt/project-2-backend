const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    image: String,
    posts: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Post'     
    }]
})

module.exports = mongoose.model('City', CitySchema)