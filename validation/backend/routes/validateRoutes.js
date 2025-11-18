import express from 'express'
import { createvalidate } from '../controllers/validateController.js'



const routes = express.Router()
//http://localhost:3000/api/validate/create


routes.post("/create", createvalidate)


export default routes