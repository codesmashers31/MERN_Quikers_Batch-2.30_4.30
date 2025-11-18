import mongoose from "mongoose";



const planetSchema = new mongoose.Schema({

    planetname:{type:String},
    planetid:{type:String},
    createdby:{type:String,default:"Users"},
    updatedby:{type:String,default:"Admin"},

}
,{timestamps:true}


)


const plantModel = mongoose.model("plantdatas",planetSchema)

export default plantModel;