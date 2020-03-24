const express = require('express')
const router = express.Router()
const { create, list, listSinglePost, update, remove } = require('../controllers/post')
const { requireSignin, authMiddleware } = require('../controllers/auth')

router.post('/post', requireSignin, create);
router.get('/post', requireSignin, list);
router.get('/post/:slug', listSinglePost);
router.put('post/:slug', update);
router.delete('/post/:slug', remove);

module.exports = router
