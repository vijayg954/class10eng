import express from "express";
import {
  createQuiz,
  getQuizList,
  getQuizById,
} from "../controllers/QuizController.js";

const router = express.Router();

router.post("/new", createQuiz);
router.get("/", getQuizList);
router.get("/:id", getQuizById);
router.put("/quiz/:id", updateQuiz);
export default router;




