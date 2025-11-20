import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import planetDB from './config/plantDB.js'




dotenv.config()

planetDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server Connecetd Successfully http://localhost:${PORT}`);
    
})


// http://localhost:3000/api/validate