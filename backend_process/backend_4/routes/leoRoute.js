import express from 'express'
import { createLeo } from '../controllers/leoController.js';


const routes = express.Router()

//console.log(routes);

// http://localhost:3000/api/auth/datas
routes.post("/datas",createLeo)



export default routes;