import authModel from '../models/authModel.js'
import bcrypt from 'bcrypt'

export const createdatas = async(req,res)=>{
    

    try {

        // console.log(req.body);
const {username,email,password} = req.body
const soltkeyRound = 10
const hased = await bcrypt.hash(password,soltkeyRound)

const datas = await authModel.create({username,email,password:hased})

res.status(200).json({msg:"Successfully created"})
     
      } catch (error) {
        console.log('error',error);
        
         res.status(401).json({msg:"Error"})
    }
}


export const logindatas = async(req,res)=>{
   
      // console.log(req.body);

try {
  

      const {email,password} = req.body

      const auth = await authModel.findOne({email})
      //console.log('email',auth);
      

      if(!auth) return res.status(400).json({msg:"User Not Found"})
      
      const mathcs =  await bcrypt.compare(password,auth.password)

      //console.log(mathcs);
      

      if(!mathcs) return res.status(400).json({msg:"Enter the Valid password"})
      
        const datas = {id:auth._id,username:auth.username,email:auth.email}

        return res.status(200).json({success:true,datas})
     
      
    } catch (error) {
        console.log('error',error);
        
         res.status(401).json({msg:"Error"})
    }
}