import express from 'express';
import dotenv from 'dotenv';
import leoRoute from './routes/leoRoute.js'
import  cors from 'cors';
import connectDb from './config/db.js';



dotenv.config();

connectDb()

const myapp = express();

myapp.use(cors())
myapp.use(express.json())


// http://localhost:3000/api/auth
myapp.use("/api/auth",leoRoute)


//console.log(process);


const PORT = process.env.PORT || 5000

// console.log(myapp);



myapp.listen(PORT,()=>{
    console.log(`Server Connected Successfully Connect http://localhost:${PORT}`);
    
})