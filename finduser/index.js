const express = require('express');
const app = express();
app.use(express.json());

const router = express.Router();

// const users = ['pk','radha','rani','radhika'];
// router.get('/user', function(req,res){
//     const {user} = req.body;
//     for(let i=0; i<users.length; i++){
//         if(users[i]==user) {
//             return res.send('user found');
//         }
//     }

//     return res.send('user not found')
// })


// const users = [ {name:"pk", password:"123"},{name:"radha", password:"1234"},{name:"radhika", password:"124"},{name:"rani", password:"143"} ];
// router.get('/user', function(req,res){
//     const {user} = req.body;
//     for(let i=0; i<users.length; i++){
//         if(users[i].name==user) {
//             return res.send(users[i]);
//         }
//     }
//     return res.send('user not found')
// })


// const users = [ user1= {name:"pk", password:"123"},user2 ={name:"radha", password:"1234"},user3 = {name:"radhika", password:"124"},user4 = {name:"rani", password:"143"} ];
// router.get('/user', function(req,res){
//     const {user} = req.body;
//     for(let i=0; i<users.length; i++){
//         if(users[i].name==user) {
//             return res.send(users[i]);
//         }
//     }
//     return res.send('user not found')
// })


const book = [{name:'two state of mind', auther:'chetan bhagat',description:'xyz'},
                {name:'atomic habit', auther:'james clean',description:'xyz'}];
const movie = [{name:'ham 2 hmare 2', actress:'alia',description:'xyz'},
                {name:'me tu yha', actress:'kaku',description:'xyz'}];

router.get('/:title', function(req,res){

    const {book} = req.body;
    for(let i =0; i<book.length; i++){

    }
})

app.use('/',router);
app.listen(3000, function(){
    console.log('server started at ', 3000);
})
