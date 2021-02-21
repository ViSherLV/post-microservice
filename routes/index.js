const { Posts } = require('../mongo/Schemas')
const { addPost, getAllPosts } = require('../mongo/helpers');
const express = require("express");
const jsonParser = express.json();
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const { events } = require('../enums');

module.exports = function (app) {
    app.post("/addPost", jsonParser, async function (req, res) {
        if (!req.body) return res.sendStatus(400);
        console.log(`reqbody`, req.body)
        const header = req.body.header;
        const image = req.body.image;
        const text = req.body.text;
        const id = uuidv4();
        const category = req.body.category;
        const result = await addPost({ header, image, text, category, id });
        axios.post('http://localhost:3003/events', { event: events.addPost, data: { header, image, text, category, id } });
        res.send(result);

    });

    app.get('/getPosts/:id', async function (req, res) {
        const id = req.params.id;
        const posts = await Posts.findOne({ id });
        res.send(posts)

    });

    app.get("/getPosts", async function (req, res) {
        axios.post('http://localhost:3003/events', { event: events.getPost, data: null });
        const posts = await getAllPosts()
        res.send(posts)
    });
    app.post('/events', jsonParser, async function (req, res) {
        const { event, data } = req.body;
        switch (event) {
            case 'addPost':
                console.log(`event addPost`)
                break;
            case 'getPosts':
                console.log(`event getPosts`)
                break;
            default:
                console.log(`Event: ${event}`)
        }
    })
}