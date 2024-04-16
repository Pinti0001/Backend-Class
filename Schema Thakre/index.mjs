import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : String
});

const User = mongoose.model('User',userSchema);

app.post('/user', async (req,res)=>{
    try {
        const newUser = new UserActivation(req.body); ///// instance of schema for validation
        // await newUser.isActive();
        await newUser.save(); /// schema ko validation kr rhe he 
        res.status(200).json(newUser); //// only json data send
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

mongoose.connect("mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net").then(res=> {
    app.listen(3000);
    console.log("port is running");
})
.catch
