import  express  from "express";
import {sendLearningTitImg , playLearningAudio} from "../controllers/learningControllers.js"
const router = express.Router();

router.get("/",sendLearningTitImg)
router.get("/:id",playLearningAudio)

export default router;