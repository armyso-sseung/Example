const userController = require('../controllers/user.controller')

const express = require('express')
const userRouter = express.Router()


userRouter.get('/', userController.getUserList)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.saveUser)


module.exports = userRouter