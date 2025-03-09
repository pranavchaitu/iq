import { Router } from "express";
import problem_controller from "../controllers/problem.controller.js";

const problem_router = new Router();

problem_router.get("/", problem_controller.get_problems);
problem_router.get("/:id", problem_controller.get_problem_by_id);

problem_router.put("/update/:id", problem_controller.update_problem_by_id);

problem_router.post("/create", problem_controller.create_problem);
problem_router.post("/createall", problem_controller.create_problem_all);

problem_router.delete("/:id", problem_controller.delete_problem_by_id);


export default problem_router;