import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    course : String,
    batch : String,
    feesPaid : Boolean,
    rollNo : String,
    sem : Number
},{timestamps});

export default  mongoose.model("FSTStudent")