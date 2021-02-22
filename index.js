const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.static(__dirname + "/public"));
require('./routes')(app);
mongoose.connect("mongodb+srv://visher:chatbot@cluster0.mxirp.mongodb.net/NewsWebsite?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(3001, function(){
        console.log("Post service is on...");
    });
});


