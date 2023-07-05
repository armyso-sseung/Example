const userRouter = require("./routers/user.router")
const postRouter = require("./routers/post.router")

const express = require("express")
const app = express()



const PORT = 3000
const HOST = "0.0.0.0"



app.use((req, res, next) => {
    const startDtm = Date.now()
    console.log(`${req.method} ${req.url}`);
    next()

    const endDtm = Date.now()
    console.log(`ProgramTime ==> ${ endDtm - startDtm }ms`);
})

app.use(express.json())

app.use('/user', userRouter)
app.use('/post', postRouter)



app.get('/', (req, res) => {
    res.send("Hello, Armyso Main Page")
})



app.listen(PORT, HOST, () => {
    console.log(`listen server ==> http://${HOST}:${PORT}`);
})