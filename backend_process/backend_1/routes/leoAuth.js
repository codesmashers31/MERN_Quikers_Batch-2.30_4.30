import express from 'express'
import { headers_controller, query_controller, userController, userEditController } from '../controllers/dataControllers.js'

const routes = express.Router()


routes.post("/user",userController)
routes.get("/userdatas/:user_id",userEditController)
routes.get("/getdatas",query_controller)
routes.get("/headersdata",headers_controller)

export default routes;

// POST Method - body 
// http://localhost:3000/api/datas/user

// get method - params
// http://localhost:3000/api/datas/userdatas/234

// get method - query string
// http://localhost:3000/api/datas/getdatas


// get Method - headers - auth
// http://localhost:3000/api/datas/headersdata