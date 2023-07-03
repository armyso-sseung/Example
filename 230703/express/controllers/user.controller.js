const { userList } = require("../models/user.model")



const getUserList = (req, res) => {
    res.send( userList )
}



module.exports = {
    getUserList
}