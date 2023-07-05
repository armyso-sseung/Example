const Express = require("express")
const userRouter = require("./routers/user.router")
const postRouter = require("./routers/post.router")



const app = Express()
const PORT = 3000
const HOST = '0.0.0.0'



// Middleware
app.use( Express.json() )

app.use( (req, res, next) => {
    const startDtm = Date.now()
    console.log(`${ req.method } ${ req.url }`);
    next()

    const endDtm = Date.now()
    console.log(`Program Time: ${ endDtm - startDtm }ms`);
} )

app.use('/user', userRouter)
app.use('/post', postRouter)



// Controller
app.get('/', (req, res) => {
    res.send('Hello, Express : Main Page')
})



app.listen(PORT, HOST, () => {
    console.log(`Listen Port ==> ${ PORT }`);
})