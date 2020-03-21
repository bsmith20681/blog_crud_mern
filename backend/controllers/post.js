const Post = require('../models/post')
const slugify = require('slugify')

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
