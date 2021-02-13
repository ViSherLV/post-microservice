const { Posts } = require('../mongo/Schemas')
const { addPost } = require('../mongo/helpers');
const express = require("express");
const jsonParser = express.json();
const { v4: uuidv4 } = require('uuid');
module.exports = function(app){

    app.get("/", function(req, res){
        
        res.send('hello world')
    });
    app.post("/addPost", jsonParser, async function(req, res){
    if(!req.body) return res.sendStatus(400);
    console.log(`reqbody`, req.body)
    const header = req.body.header;
    const image =  req.body.image;
    const text =  req.body.text;
    const id = uuidv4();
    const category = req.body.category;
    const result = await addPost({header,image, text, category, id })
    res.send(result);
    });
    app.get('/getPosts/:id', async function(req, res) {
        const id = req.params.id;
        const posts = await Posts.findOne({id});
        res.send(posts)
       
       });
     
    app.get("/getPosts", async function(req, res){
             
        //const id = req.params.id;
        const posts = await Posts.find({});
        res.send(posts)
    });
}