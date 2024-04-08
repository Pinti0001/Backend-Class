import studentModel from "../models/studentModel.mjs";

//// using get API find students
const findStudent = async (req,res) =>{
    // const findStudent = await studentModel.find();

    const {email, rollNo, phone} = req.query;
    if(rollNo) {

    }
    const findStudent = await studentModel.findOne();
    return res.status(200).send({
        status:true,
        message: findStudent
    })
}

//// delete student 
const deleteStudent = async (req,res)=>{
    try {
        
        // const data = await studentModel.deleteMany({name:'Pintu'}) /// isse jo delete hota he uski counting show hogi data nhi show hoga
        const data = await studentModel.findByIdAndDelete({_id:"661418d572eeb397eb7ecae0"}) // isse jo user delete ho rha he uska data show ho jata he
        return res.status(200).send({status:true, message:data})
    } catch (error) {
        return res.send({status :500, message: error.message})
    }
}

//// using post API create students
const createStudent = async (req,res) => {
    
    try {
        const data = req.body;
        const {name, email} = req.body;
        const checkUser = await studentModel.findOne({email:email, name:name})
        if(checkUser==!null)  {
            return res.status(200).send({status:"failed",msg:"user already exist"})
        }
        const createdStudent = await studentModel.create(data);  
        // const createdStudent = await studentModel.insertMany([data,data]); /// insertOne() working on mongose not on mongoose
    return res.status(201).send({
        status:true,
        message: createdStudent
    })
    } catch (error) {
        return res.status(500).send({status:"failed",message:error.message})
    }
    
}

/// update student
const updateStudent = async (req,res)=>{
    const newStudent = await studentModel.updateOne({"name":"Vivek"},{$set:{"name":"Pintu"}})/// 1st vala jisko update krna he 2nd vala jisse krna he
    return res.status(200).send({status:true, message:newStudent})
}

export {findStudent,createStudent, deleteStudent, updateStudent};