import express from 'express'
import { createdatas,logindatas } from '../controllers/authController.js'



const routes = express.Router()
// http://localhost:3000/api/auth/create
// http://localhost:3000/api/auth/login

routes.post("/create",createdatas)
routes.post("/login",logindatas)

export default routes