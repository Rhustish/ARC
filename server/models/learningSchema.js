import mongoose from "mongoose";

const schema = mongoose.Schema;

const learningSchema = new schema({
    name:{
        type: String,

    },
    image:{
        type:String,

    },
    audiofile:{

    }
})

export default mongoose.models.learningCollection || mongoose.model("learningCollection",learningSchema)