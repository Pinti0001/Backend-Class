import studentModel from "../models/studentModel.mjs";
const findStudent = async (req, res)=>{
    // const students = await studentModel.find(); ///  isme agr koi galat cnd de to empty array aayega and if cnd is write in array of object
    // const students = await studentModel.findOne(); /// by default get oldest created data
    const students = await studentModel.findOne({name:"Pintu"}); /// specific data if data name or other condition are wrong then get message null

    return res.send({status : "ok", message : students})
}

const createStudent = async (req, res) => {
    const data = req.body;
    const createStudent = await studentModel.create(data);
    return res.send({status:'ok', message:createStudent});

}

export {findStudent,createStudent};