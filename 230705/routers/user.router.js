const exporess = require("express")
const userRouter = exporess.Router()

const userController = require("../controllers/user.controller")

userRouter.get('/', userController.getUserList)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.saveUser)



module.exports = userRouter