import mongoose from "mongoose";



const authSchema = new mongoose.Schema({

    username:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String},
    createdby:{type:String,default:"Users"},
    updatedby:{type:String,default:"Admin"},

}
,{timestamps:true}


)


const authModel = mongoose.model("authdatas",authSchema)

export default authModel;