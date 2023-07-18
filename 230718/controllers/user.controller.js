const { userList } = require('../models/user.model')


const getUserList = ( req, res ) => {
    res.send( userList )
}

const getUser = ( req, res ) => {
    const userId = req.params.id
    const userInfo = userList.filter(user => user.id == userId)

    if ( !userInfo.length ) {
        res.status(404).end(`404 Not User Found [ ID : ${ userId } ]`)
        return
    }
    res.send(userInfo)
}

const saveUser = ( req, res ) => {
    const name = req.body.name
    const age = req.body.age
    const userInfo = {
        id: userList.length + 1,
        name,
        age
    }

    userList.push(userInfo)
    res.send(userInfo)
}

module.exports = {
    getUserList,
    getUser,
    saveUser
}