import { Router } from "express";

const doubt_router = new Router();

doubt_router.get('/', (req, res) => {
    res.json('Hello from doubt route');
}); 

export default doubt_router;