const Post = require('../models/post')
const slugify = require('slugify')
const expressJwt = require('express-jwt')

exports.create = (req, res) => {
    const {title, content, user} = req.body
    const slug = slugify(title)

    switch(true) {
      case !title:
      return res.status(400).json({
        error: 'A title is required'
      })
      break;
      case !content:
      return res.status(400).json({
        error: 'Content is required'
      })
      break;
    }
    Post.create({title, content, user, slug}, (err, post) => {
      if(err) {
        console.log(err)
        res.status(400).json({
          error: 'duplicate post, try another title'
        })
      }
      res.json(post)
    })
}

exports.list = (req, res) => {
  Post.find({})
    .sort({createAt: -1})
    .exec((err, posts) => {
    if(err) console.log(err)
    res.json(posts);
  })
}

exports.listSinglePost = (req, res) => {
  const {slug} = req.params
  Post.findOne({slug})
    .exec((err, post) => {
      if (err) console.log(err)
      res.json(post)
    })
}

exports.update = (req, res) => {
  const {slug} = req.params
  const {title, content, user} = req.body
  Post.findOneAndUpdate({slug}, {title, content, user}, {new: true})
    .exec((err, post) => {
      if(err) console.log(err)
        res.json(post)
    })
}

exports.remove = (req, res) => {
  const {slug} = req.params
  Post.findOneAndRemove({slug})
    .exec((err, post) => {
      if(err) console.log(err)
      res.json({
        message: 'Post was deleted'
      })
  })
}
