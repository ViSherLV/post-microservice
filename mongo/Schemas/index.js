const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({ name: String, age: Number }, { versionKey: false });
const postSchema = new Schema({
    header: String,
    image: String,
    text: String,
    id: String,
    category: String
}, { versionKey: false });
const Posts = mongoose.model('Posts', postSchema)

module.exports = {
    Posts,
}

