const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const postSchema = new Schema({
    header: String,
    image: String,
    text: String,
    id: String,
    catregory: String
}, {versionKey: false});
const Posts = mongoose.model('Posts', postSchema)

module.exports = {
    Posts,
}
// const post = {
//     header: 'Escape from GameStop stock drama with these deals',
//     image: image,
//     text: 'January 2021 has been full of important news, but it’s been a bit lousy when it comes to deals. Still, we’ve done our part in scouring all of the major retailers for discounts on products we care about (and we think you care about, too). There aren’t many brand-new deals to be found in this week’s dispatch, but go ahead and take a look if you haven’t been following them closely.',
//     id: '1223',
//     catregory: 'tech'
// // }

