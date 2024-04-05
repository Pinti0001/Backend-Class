import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name : {type:String, required:true, minLength:3, trim:true},
    rollNo : {type:String, required:true, minLength:1, trim:true, unique:true},
    dob : {type:String, required:true, minLength:3, trim:true},
    batch : {type:String, required:true, minLength:3, trim:true},
    course : {type:String, required:true, minLength:3, trim:true},
    semester : {type:String, required:true, minLength:3, trim:true},
    phone : {type:String, required:true, minLength:3, trim:true, minLength:10, unique:true},
    age : {type:Number, min:0, max:150, required:true},
    email : {type:String, required:true, minLength:3, trim:true, unique:true},
    password : {type:String, required:true, minLength:3, trim:true, minLength:4, maxLength:50},
    sex : {type:String, required:true, minLength:3, trim:true}
},{timestamps:true});

export default mongoose.model('studentData', studentSchema);