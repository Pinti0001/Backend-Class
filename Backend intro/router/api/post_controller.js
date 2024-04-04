const express = require('express');
const router = express.Router();
const Posts = require('../../models/Posts');
//your CRUD actions code go here 
module.exports = router;

router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
    const post = await newPost.save();
    if(!post) throw Error('Something went wrong with the post')
    res.status(200).json(post);
    } catch {
    res.status(400).json({msg: error})
    }
    });
    
    router.get('/', async (req, res) => {
        try {
        const posts = await Posts.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts);
        }catch(err) {
        res.status(400).json({mesg: err})
        }
        });
        