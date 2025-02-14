import { PrismaClient } from "@prisma/client"
import express, { json } from "express"
import { DoubtBody } from "../types"

const router = express.Router()

const db = new PrismaClient()

// =>/doubt/create
router.post('/create',async (req,res) => {
    const body : DoubtBody = req.body
    try {        
        const doubt = await db.doubt.create({
            data : {
                query : body.query,
                problem_id : body.problem_id,
                author_id : body.author_id
            }
        })
        res.json({
            id : doubt.id
        })
    } catch (error) {
        res.json(error)
    }
})

router.get('/all',async (req,res) => {
    const doubts = await db.doubt.findMany()
    res.json(doubts)
})

router.delete('/delete',async (req,res) => {
    const id : number = Number(req.headers.id)
    if(!id) {
        res.status(400).json({
            message : 'bad request'
        })
    }
    try {
        await db.doubt.delete({
            where : {
                id
            }
        })
        res.json({
            success : true
        })
    } catch (error) {
        res.json({
            error,
            success : false
        })
    }
})

export const doubtRouter = router