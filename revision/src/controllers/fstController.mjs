import studentModel from "../models/studentModel.mjs";
const findStudent = async (req, res)=>{
    return res.send("hello class")
}

const createStudent = async (req, res) => {
    const data = req.body;
    const createStudent = await studentModel.create(data);
    return res.send({status:'ok', message:createStudent});

}

export {findStudent,createStudent};