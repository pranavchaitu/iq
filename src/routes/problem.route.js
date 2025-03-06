import { Router } from "express";

const problem_router = new Router();

problem_router.get('/', (req, res) => {
    res.json('Hello from problem route');
}); 

export default problem_router;