import  express  from "express";
import learningController from "../controllers/learningController.js"
const router = express.Router();

router.get("/learning",learningController)

export default router;