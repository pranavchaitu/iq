import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const port = process.env.PORT

const app = express()

app.get('/',(req,res) => {
    res.json({
        'msg' : "hello world"
    })
})

app.listen(port,() => {
    console.log('listening to port:',port);
})



