import { Router } from "express";
import doubt_controller from "../controllers/doubt.controller.js";

const doubt_router = new Router();

doubt_router.get("/all",doubt_controller.get_doubt_all);
doubt_router.get("/:id",doubt_controller.get_doubt_by_id); 

doubt_router.post("/create",doubt_controller.create_doubt);

doubt_router.delete("/:id",doubt_controller.delete_doubt_by_id);

doubt_router.put("/:id/assign",doubt_controller.assign_doubt_to_student);
doubt_router.put("/:id/answer",doubt_controller.answer_doubt); 
doubt_router.put("/:id/resolve",doubt_controller.update_doubt_resolve);

doubt_router.put("/:id",doubt_controller.update_doubt_by_id);


export default doubt_router;