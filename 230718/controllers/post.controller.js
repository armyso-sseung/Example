const { postList } = require('../models/post.model')


const getPostList = ( req, res ) => {
    res.send( postList )
}

const getPost = ( req, res ) => {
    const postId = req.params.id
    const postInfo = postList.filter(post => post.id == postId)

    if ( !postInfo.length ) {
        res.status(404).end(`404 Not Found Post [ ID : ${ postId } ]`)
        return
    }
    res.send(postInfo)
}

const savePost = ( req, res ) => {
    const content = req.body.content
    const postInfo = {
        id: postList.length + 1,
        content: content
    }

    postList.push(postInfo)
    res.send(postInfo)
}


module.exports = {
    getPostList,
    getPost,
    savePost
}