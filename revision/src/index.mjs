import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.mjs';
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/practice").then(()=> console.log("database connected")).catch((err)=>console.log(err));

app.use('/',router);
app.listen(3000,()=> console.log("server started on port ", 3000));