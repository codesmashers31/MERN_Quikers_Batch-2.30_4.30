import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:String,
    address:String,
})


const userModels = mongoose.model("users",userSchema)

export default userModels;