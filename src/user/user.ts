import express from "express"

const user = express.Router()

user.get('/',(req,res) => {
    res.json({
        msg : "from user"
    })
})



export const userRouter = user