const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors')
require('./mongoDB/mongoose')

const app = express()

app.use(cors())
app.use(bodyParser.json());

const userRouter = require('./routers/userDetails')

app.use(userRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(process.env.PORT,()=>{
    console.log('Connected to the server');
})