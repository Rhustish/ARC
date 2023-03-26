import json from "body-parser"
import learningCollection from "../models/learningSchema.js"



export const sendLearningTitImg = async (req,res)=>{
    try{
        const resArray = await learningCollection.find({}, "name image");
        res.status(200).json(resArray);
    }catch(e){
        res.status(404).json({message:e.message})
    }
}

export const playLearningAudio = async (req,res)=>{
    const id = req.params;
    try{
        const aUrl = await learningCollection.findById(id,"audioURL");
        res.status(200).json(aUrl);
    }catch(e){
        res.status(400).json({message:e.message})
    }
}