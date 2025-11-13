import express from 'express'
import dotenv from 'dotenv'
import chennaiRoute from './routes/chennaiRoute.js'
import cors from 'cors';
import connectDb from './config/db.js';


dotenv.config()
connectDb()

const myapp = express()

myapp.use(cors())
myapp.use(express.json())

// http://localhost:3000/api/chennairoute

myapp.use("/api/chennairoute",chennaiRoute)


const PORT = process.env.PORT || 5000


myapp.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})

