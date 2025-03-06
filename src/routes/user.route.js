import { Router } from 'express';

const user_router = new Router();

user_router.get('/', (req, res) => {
    res.json('Hello from user route');
});

export default user_router;
