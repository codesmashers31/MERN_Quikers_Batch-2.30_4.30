import express from 'express'
import { createdatas,getPlanetDatas,editPlanetDatas,updateplanet,deletedatas } from '../controllers/planetDataController.js'


const routes = express.Router()
// http://localhost:3000/api/planet/planetenter
// http://localhost:3000/api/planet/getplanet
// http://localhost:3000/api/planet/editid/:id
// http://localhost:3000/api/planet/updateid/:id
// http://localhost:3000/api/planet/delete/:id

routes.post("/planetenter",createdatas)
routes.get("/getplanet",getPlanetDatas)
routes.get("/editid/:id",editPlanetDatas)
routes.put("/updateid/:id",updateplanet)
routes.delete("/delete/:id",deletedatas)

export default routes