const { postList } = require("../models/post.model")



getPostList = (req, res) => {
    res.send( postList )
}

getPost = (req, res) => {
    const postId = req.params.id
    const postInfo = postList.filter(post => post.id == postId)

    if ( !postInfo.length ) {
        res.status(404).end("Not Found Post")
    }

    res.send(postInfo)
}

savePost = (req, res) => {
    const contents = req.body.contents
    const postInfo = {
        id: postList.length + 1,
        contents
    }

    postList.push(postInfo)
    res.send(postInfo)
}



module.exports = {
    getPostList,
    getPost,
    savePost
}