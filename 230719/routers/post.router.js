const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')


postRouter.get('/', postController.getPostList)
postRouter.get('/:id', postController.getPost)
postRouter.post('/', postController.savePost)


module.exports = postRouter