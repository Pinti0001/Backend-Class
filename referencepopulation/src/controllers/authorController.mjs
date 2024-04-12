import authorModels from "../models/authorModels.mjs"

const createAuthor = async (req,res)=>{
    try {
        const data = await authorModels.create(req.body);

        return res.status(201).send({status: true, message:data})
    } catch (error) {
        return res.status(500).send({status: false, message : error.message});
    }
}

export default createAuthor;