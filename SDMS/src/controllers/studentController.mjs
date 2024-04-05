import studentModel from "../models/studentModel.mjs";

//// using get API find students
const findStudent = async (req,res) =>{
    // const findStudent = await studentModel.find();

    const {email, rollNo, phone} = req.query;
    if(rollNo) {

    }
    const findStudent = await studentModel.findOne();
    return res.send({
        status:true,
        message: findStudent
    })
}

//// delete student 
const deleteStudent = async (req,res)=>{
    // const data = await studentModel.deleteMany({name:'Pintu'}) /// isse jo delete hota he uski counting show hogi data nhi show hoga
    const data = await studentModel.findByIdAndDelete({_id:"660f8aa3991a6cc88bd86cbb"}) // isse jo user delete ho rha he uska data show ho jata he
    return res.send({status:true, message:data})
}

//// using post API create students
const createStudent = async (req,res) => {
    const data = req.body;
    // const createdStudent = await studentModel.create(data);
    const createdStudent = await studentModel.insertMany([data,data]);
    return res.send({
        status:true,
        message: createdStudent
    })
}

/// update student
const updateStudent = async (req,res)=>{
    const newStudent = await studentModel.updateOne({"name":"Vivek"},{$set:{"name":"Pintu"}})/// 1st vala jisko update krna he 2nd vala jisse krna he
    return res.send({status:true, message:newStudent})
}

export {findStudent,createStudent, deleteStudent, updateStudent};