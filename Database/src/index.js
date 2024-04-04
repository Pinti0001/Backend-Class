const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = require('./routes/route');
// const router = express.Router();
app.use(express.json());

// router.get('/',function(req,res){
//     res.send("testing")
// })

/// connect is a mongoDB method which is use to connect with mongoDB server if conneted then .then() me ek callback fn exicute krenge otherwise catch() callback fn exicute
mongoose.connect('mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/').then(()=> console.log('database connected')).catch((err)=>console.log(err));
app.use('/',router);
app.listen(3000,function(){
    console.log('server strted on port ', 3000)
})