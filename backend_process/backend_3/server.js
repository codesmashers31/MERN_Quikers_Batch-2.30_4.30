import express from 'express';
import dotenv from 'dotenv';
import dataRoutes from './routes/dataRoutes.js'
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config()
connectDB();
const app =  express();



app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use("/api/datasave",dataRoutes)


app.listen(PORT,()=>{
    console.log(`Conttected successfully done http://localhost:${PORT}`);
    
})


// http://localhost:3000/api/datasave