import express from 'express'
import { createDatas, editData, getRoutesData } from '../controllers/RouteController.js';


// http://localhost:3000/api/chennairoute/insert
// http://localhost:3000/api/chennairoute/getdata
// http://localhost:3000/api/chennairoute/edit/:id

const routes = express.Router()



routes.post("/insert",createDatas)
routes.get("/getdata",getRoutesData)
routes.get("/edit/:id",editData)

export default routes;