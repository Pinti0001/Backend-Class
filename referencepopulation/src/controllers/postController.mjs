import postmodelsw from "../models/postmodelsw.mjs";

const createPost = async (req,res)=>{
    try {
        const data = await postmodelsw.create(req.body);

        return res.status(201).send({status: true, message:data})
    } catch (error) {
        return res.status(500).send({status: false, message : error.message});
    }
}

const findPost = async (req,res) => {
    try {
        const data = await postmodelsw.find().populate("auther") //// feild
        return res.status(200).send({status : "ok", message: data});

    } catch (error) {
        return res.status(500).send({status:"failed", message:error.message})
    }
}

export  {createPost, findPost};