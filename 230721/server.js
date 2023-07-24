const path = require('path')
const userRouter = require('./routers/user.router')

const express = require('express')
const app = express()

const PORT = 3000
const HOST = '0.0.0.0'


app.set('viewengine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use((req, res, next) => {
    const startTime = new Date()
    console.log(`${req.method} ${req.url}`)
    next()

    const endTime = new Date()
    console.log(`Program Time : ${endTime - startTime}ms`)
})

app.use('/user', userRouter)


app.get('/', (req, res) => {
    res.send('SSEUNG Page')
})


app.listen(PORT, HOST, () => {
    console.log(`Sever to http://${HOST}:${PORT}`);
})