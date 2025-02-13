import { PrismaClient } from "@prisma/client"
import express from "express"
import { ProblemBody, UpdateProblemBody } from "../types"

const problem = express.Router()
const db = new PrismaClient()

problem.get('/',(req,res) => {
    res.json({
        msg : "from problem router"
    })
})

// =>/problem/create
problem.post('/create',async (req,res) => {
    const body : ProblemBody = req.body
    try {
        const problem = await db.problem.create({
            data : {
                name : body.name,
                description : body.description,
                doubts : body.doubts,
                tags : body.tags,
            }
        })
        res.json({
            id : problem.id
        })
    } catch (error) {
        res.json(error)
    }
})

// =>/problem/update
problem.put('/update',async (req,res) => {
    const body : UpdateProblemBody = req.body
    const id : number = Number(req.headers.id)!
    if(!id) {
        res.status(400).json({
            message : 'bad request'
        })
    }
    try {        
        await db.problem.update({
            where : {
                id
            },
            data : body
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

// =>/problem/delete
problem.delete('/delete',async (req,res) => {
    const id : number = Number(req.headers.id)!
    if(!id) {
        res.status(400).json({
            message : 'bad request'
        })
    }
    try {
        await db.problem.delete({
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

// =>/problem/all => ('gets all problems created until now')
problem.get('/all',async (req,res) => {
    const problems = await db.problem.findMany()
    res.json(problems)
})

export const problemRouter = problem