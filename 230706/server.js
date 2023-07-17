const express = require('express')
const userRouter = require('./routers/user.router')
const postRouter = require('./routers/post.router')
const path = require('path')


const app = express()
const PORT = 3000
const HOST = '0.0.0.0'


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    const startDtm = Date.now()
    console.log(`${req.method} ${req.url}`);
    next()

    const endDtm = Date.now()
    console.log(`Program Time: ${ endDtm - startDtm }`);
})

app.use('/user', userRouter)
app.use('/post', postRouter)


app.get('/', (req, res) => {
    res.render('index', {
        imageTitle: "It is a Armyso"
    })
})


app.listen(PORT, HOST, () => {
    console.log(`Listen server http://${ HOST }:${ PORT }`);
})