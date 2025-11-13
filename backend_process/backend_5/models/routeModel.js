import mongoose from "mongoose";


const routeSchema = new mongoose.Schema({
    startroute:String,
    endroute:String,
})



const Chennai_Route_Model = mongoose.model("chennairoutes",routeSchema)


export default Chennai_Route_Model;