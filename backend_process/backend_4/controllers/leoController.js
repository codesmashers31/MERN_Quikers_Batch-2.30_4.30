import userModels from "../models/userModel.js";

export const createLeo = async(req,res)=>{


    try {

        // console.log(req.body);

        const {username,address} = req.body

        const datasave = await userModels.create({username,address})

        res.status(201).json({msg:"Datas saved successfully",
             datas:datasave
        })
        
        
    } catch (error) {
        console.log('error',error);
         res.status(201).json({msg:"Somethig error",
             error:error
        })
        
    }



} 