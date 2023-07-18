const userRouter = require('./routers/user.router')
const postRouter = require('./routers/post.router')
const path = require('path')

const express = require('express')
const app = express()

const PORT = 3000
const HOST = `0.0.0.0`

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use((req, res, next) => {
    const start = new Date()
    console.log(`${ req.method } ${ req.url }`);
    next()

    const end = new Date()
    console.log(`Program run time : ${ end - start }ms`);
})

app.use('/user', userRouter)
app.use('/post', postRouter)

app.get('/', ( req, res ) => {
    res.render('index', {
        indexText: '호잇'
    })
    // res.send('안녕하세요.')
})


app.listen(PORT, HOST, () => {
    console.log(`listen to server : http://${ HOST }:${ PORT }`);
})