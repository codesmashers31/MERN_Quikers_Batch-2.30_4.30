import mongoose from "mongoose";


const slaschema = new mongoose.Schema({

    sladevelopername:{type:String,required:true},
    slaaddress:String,
    slaprocess:String,
    pincode:Number,

}) 


const slaModel = mongoose.model("sladata",slaschema)

export default slaModel;