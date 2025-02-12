import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { userRouter } from './user/user'
const port = process.env.PORT

const app = express()

app.use('/user',userRouter)

app.listen(port,() => {
    console.log(`HERE : http://localhost:${port}`);
})

