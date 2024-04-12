import  express  from "express";


const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/SDMS').then(()=>console.log('database connected')).catch((err)=> console.log(err))

app.use('/',router);
app.listen(8000,()=>console.log('server started on port ',8000));