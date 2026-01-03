import express from "express";
import auth from "../middleware/authMiddleware.js";
import { createTask, getTasks, updateTaskStatus, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.put("/:id", auth, updateTaskStatus); // ✅ UPDATE
router.delete("/:id", auth, deleteTask);

export default router;
