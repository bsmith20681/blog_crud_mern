const express = require('express')
const router = express.Router()
const { create, list } = require('../controllers/post')
const { requireSignin, authMiddleware } = require('../controllers/auth')

router.post('/post', requireSignin, create);
router.get('/post', requireSignin, list);


module.exports = router
