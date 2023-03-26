import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import learningRoute from "./routes/learningRoute.js"

//express app
const app = express()

// middleware conf
dotenv.config();
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("common"))

//Routes
app.use("/learning",learningRoute)
app.get("/",(req,res)=>{
    res.send("work")
})
// App listener
// mongoose.connect(process.env.MONGODB_URI)
// .then(()=>{
//     app.listen(process.env.PORT,()=>{console.log(`Server Listening on port ${process.env.PORT}`);})
// }).catch((err)=>{
//     console.log(err.message);   
// })
app.listen(3000)