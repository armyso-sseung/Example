const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')


userRouter.get('/', userController.getUserList)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.saveUser)
userRouter.get('/test', userController.getUserPage)


module.exports = userRouter