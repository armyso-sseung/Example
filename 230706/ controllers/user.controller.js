const { userList } = require('../models/user.model')


getUserList = ( req, res ) => {
    res.send(userList)
}

getUser = ( req, res ) => {
    const userId = req.params.id
    const userInfo = userList.filter(user => user.id == userId)
    if ( !userInfo.length ) {
        res.status(404).end(`404 Not Found User [ ID: ${ userId } ]`)
    }

    res.send(userInfo)
}

saveUser = ( req, res ) => {
    const name = req.body.name
    const userInfo = {
        id: userList.length + 1,
        name
    }    

    userList.push(userInfo)
    res.send(userInfo)
}


module.exports = {
    getUserList,
    getUser,
    saveUser
}