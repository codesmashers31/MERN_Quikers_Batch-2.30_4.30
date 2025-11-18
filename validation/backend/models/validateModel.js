import mongoose from "mongoose";



const validSchema = new mongoose.Schema({

    firstname:{type:String},
    email:{type:String},
    password:{type:String},
    createdby:{type:String,default:"Users"},
    updatedby:{type:String,default:"Admin"},

}
,{timestamps:true}


)


const validModel = mongoose.model("validdaats",validSchema)

export default validModel;