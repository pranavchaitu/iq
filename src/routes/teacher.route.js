/*
    This the removed Schema
*/


import { Router } from "express";  
import teacher_controller  from "../controllers/teacher.controller.js";

const teacher_route = Router();

teacher_route.get("/", teacher_controller.get_all_teachers);
teacher_route.get("/:id", teacher_controller.get_teacher_by_id);

teacher_route.post("/create", teacher_controller.create_teacher);
teacher_route.post("/createall", teacher_controller.create_teacher_all);

teacher_route.put("/:id", teacher_controller.update_teacher_by_id);
teacher_route.delete("/:id", teacher_controller.delete_teacher_by_id);

export default teacher_route;

