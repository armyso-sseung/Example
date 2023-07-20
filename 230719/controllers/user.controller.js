const { userList } = require('../models/user.model')


const getUserList = (req, res) => {
    res.render('user', {
        title: '제목',
        content: userList
    })
}

const getUser = (req, res) => {
    const userId = req.params.id
    const userInfo = userList.filter(user => user.id == userId)
    if (!userInfo.length) {
        res.status(404).end(`404 Not Found User [ ID : ${ userId } ]`)
        return
    }
    res.send(userInfo)
}

const saveUser = (req, res) => {
    const age = req.body.age
    const name = req.body.name
    const userInfo = {
        id: userList.length + 1,
        age,
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