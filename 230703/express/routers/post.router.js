const express = require("express")
const postController = require("../controllers/post.controller")
const postRouter = express.Router()



postRouter.get('/', postController.getPostList)
postRouter.get('/:id', postController.getPost)
postRouter.post('/', postController.savePost)



module.exports = postRouter