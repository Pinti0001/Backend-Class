import express from 'express';
const app=express();
const router =express.Router();
import bodyParser from 'body-parser';

// built in middleware because it is already defined in express
// app.use(express.json());


///// third party middleware (bosyparser)
app.use(bodyParser.json());

// global middleware or application level 
// app.use((req,res,next)=>{
//     let auth=true;
//     if(auth){
//         console.log("i am global middleware")
//         next();
//     }else{
//         res.send('login please');
//     }
    
// })
// // custom middleware
// router.get('/custom',(req,res,next)=>{
//     // let name='karan'
//     let name='himanshu'
//     if(name=='himanshu'){
//         console.log("i am custom middleware")
//         next();
//     }else{
//         res.send('only himanshu can use this');
//     }
// });

// ///// router level middelware 
// router.use((res,req,nxt)=>{
//     console.log("this middleware will be executed for requested to the router");
//     nxt();
// })

// router.get('/test',(req,res)=>{
//     // res.send("hello middleware")
//     res.send(req.body);
// })
// app.use('/',router);


//// error handling middleware
// app.use((err, req,res,nxt)=>{
//     // console.log(err.stack);
//     if(!err) console.log("alright");
//     else console.log("something went wrong")
// });

app.get('/',(req,res)=>{
    throw new Error('Intentional error')
    console.log("test error")
    res.send("cffv")
})

app.listen(8000,()=>{
    console.log("server started on port :",8000);
})