import express from 'express';
import dotenv from 'dotenv';
import conctionDB from './config/db.js';


dotenv.config()

conctionDB()
const PORT = process.env.PORT || 5000

const app = express()



app.listen(PORT,()=>{
    console.log(`Server Succfully connected http://localhost:${PORT}`);
    
})


// http://localhost:3000/api/datas