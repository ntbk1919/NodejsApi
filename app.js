const express=require('express');
const mongoose=require('mongoose');
require('dotenv/config')
const app=express();
const cors=require('cors')
//IMPORT ROUTES
const postsRoute =require('./routes/posts');
//MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use('/posts',postsRoute);


//ROUTES
app.get('/',(req,res)=>{
    res.send("We are at Home page")
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true},

()=>
console.log('Connected to db')
);








//Start listening to server 



app.listen(3000);

