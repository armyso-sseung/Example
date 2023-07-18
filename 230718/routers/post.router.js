const postController = require('../controllers/post.controller')

const express = require('express')
const postRouter = express.Router()


postRouter.get('/', postController.getPostList)
postRouter.get('/:id', postController.getPost)
postRouter.post('/', postController.savePost)


module.exports = postRouter