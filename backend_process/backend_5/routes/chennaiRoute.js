import express from 'express'
import { createDatas, getRoutesData } from '../controllers/RouteController.js';


// http://localhost:3000/api/chennairoute/insert
// http://localhost:3000/api/chennairoute/getdata

const routes = express.Router()



routes.post("/insert",createDatas)
routes.get("/getdata",getRoutesData)

export default routes;