const express=require('express');
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose');
const app=express();

const imageRouter=require('./routes/image')

app.use(cors());
app.use('/',imageRouter);

const PORT=process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL ;
mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("CONNECTED TO DB");
        app.listen(PORT,()=>{
            console.log("BACKEND RUNNING AT PORT : "+PORT);
        }) 
    })
    .catch((e=>{
        console.log(e.message);
    }))
        
    