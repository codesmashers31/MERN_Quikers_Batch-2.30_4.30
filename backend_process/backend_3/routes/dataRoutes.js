import express from 'express'
import { createDatas, getdatas } from '../controllers/dataHandling.js'

const routes = express.Router() 


routes.post("/dataslink",createDatas)
routes.get("/getdatas",getdatas)

export default routes;



// http://localhost:3000/api/datasave/dataslink

//  http://localhost:3000/api/datasave/getdatas