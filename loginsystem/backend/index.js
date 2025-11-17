import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import planetRoute from './routes/planetRoutes.js'
import planetDB from './config/plantDB.js'
import authRoute from './routes/authRoutes.js'



dotenv.config()

planetDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/planet",planetRoute)
app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server Connecetd Successfully http://localhost:${PORT}`);
    
})


// http://localhost:3000/api/planet