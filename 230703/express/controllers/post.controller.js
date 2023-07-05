const { postList } = require("../models/post.model")


const getPostList = ( req, res ) => {
    res.send(postList)
}

const getPost = ( req, res ) => {
    const postId = req.params.id
    const postInfo = postList.filter(post => post.id == postId)

    if ( postInfo.length == 0 ) {
        res.status(404).end('404 Not Found')
    }

    res.send(postInfo)
}

const savePost = ( req, res ) => {
    console.log('???');
    const contents = req.body.contents
    const postInfo = {
        id: postList.length + 1,
        contents
    }

    postList.push( postInfo )
    res.send( postInfo )
}



module.exports = {
    getPostList,
    getPost,
    savePost
}