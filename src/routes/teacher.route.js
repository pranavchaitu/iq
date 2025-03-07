import { Router } from "express";   

const teacher_route = Router();

teacher_route.get("/", (req, res) => {
    res.send("Hello From Teacher route");
});

export default teacher_route;

