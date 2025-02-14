import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { userRouter } from './user/user'
import { problemRouter } from './problem/problem'
import { doubtRouter } from './doubt/doubt'
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use('/user',userRouter)
app.use('/problem',problemRouter)
app.use('/doubt',doubtRouter)

app.listen(port,() => {
    console.log(`HERE : http://localhost:${port}`);
})
