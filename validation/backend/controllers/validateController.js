import validModel from '../models/validateModel.js'
import bcrypt from 'bcrypt';
export const createvalidate = async(req,res)=>{

    //console.log(req.body);

    try {
        
   
    const {firstname,email,password} = req.body
    
    if (!firstname || !email || !password) {
        return res.status(400).json({msg:"Please Fill the All empty feild"})
        
    }


     if (password>=8) {
        return res.status(400).json({msg:"Password must be above 8 charectors"})
        
    }

    const validateemail = await validModel.findOne({email})
    if(validateemail){
       return res.status(409).json({msg:"Already This email Register"})
    }

    const encrptpassword = await bcrypt.hash(password,10)
    const insertDatas = await validModel.create({firstname,email,password:encrptpassword})
      
    res.status(201).json({msg:"Successfully done",insertDatas})

    } catch (error) {

        res.status(500).json({msg:"Server Error",error:error.message})
    }





}