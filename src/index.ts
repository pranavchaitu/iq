import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { userRouter } from './user/user'
// import { PrismaClient } from '@prisma/client'
const port = process.env.PORT

const app = express()

app.use('/user',userRouter)

app.listen(port,() => {
    console.log(`HERE : http://localhost:${port}`);
})

// const prisma = new PrismaClient()

// async function main() {
//     let useds = await prisma.user.create({
//         data : {
//             id : 1,
//             email : 'dsdsdsd',
//             iq_rating : 1,
//             name : 'pranav',
//             password : 'dsdsds'
//         }
//     })
//     console.log(useds)
//     const user = await prisma.user.findFirst({
//         where : {
//             name : 'pranav'
//         }
//     })
//     console.log(user)
// }

// main()