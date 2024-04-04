// importing express
const express =  require('express');

// creating instance(like object) of express to create express app

const app = express();

// create router instance for routing from express
const router = express.Router();

// get API creation router.get(path, callback)
router.get('/hello', function(req, res){
    // const name = req.query.p;
    // const brand = req.query.b;
    // console.log(name, brand);
    // res.send({status: "ok", msg: {name:name, brand:brand}})


    const {p, b} = req.query;
    res.send({status:"ok", msg:{name:p, brand:b}});
})


router.get('/:country/user/:state', function(req, res){
    // destructuring the query param 
    const {p, b} = req.query;
    const cntryName = req.params;
    console.log(cntryName);
    res.send({status:"ok", msg:{name:p, brand:b}});
})

// enabling json data read
app.use(express.json());
router.get('/:country/user/:state', function(req, res){
    // destructuring the query param 
    const {p, b} = req.query;
    // acccessing body req
    const user = req.body;
    console.log(user)
    
    // const cntryName = req.params;
    // console.log(cntryName);
    res.send({status:"ok", msg:{name:p, brand:b},user});
})

router.post('/hello', function(req, res){
    res.send("my first Post API")
})
// global middleware for all api calling defined with router 
app.use('/', router);

app.use((req, res, next) => {
        res.status(404).send("Sorry can't find that!")
    })

// code for server start app.listen(port, callback) 
app.listen(8000, function(){
    console.log('server started at port :', 8000);
})