import slaModel from "../models/slaDevelopers.js"

export const createDatas = async(req,res) => {
        //console.log(req.body);   

        try {

    const {sladevelopername,slaaddress,slaprocess,pincode} = req.body

    const createdata = await slaModel.create({sladevelopername,slaaddress,slaprocess,pincode}) 
   
    res.status(201).json({
        msg:"Succfully created",
        datas:createdata
    })
            
        } catch (error) {

            res.status(400).json({msg:"Something seror",error:error})
            console.log('error',error);
            
        }

        
}

export const getdatas = async(req,res)=>{

    try{

        const getdatas = await slaModel.find()

        res.status(200).json({datas:getdatas})

    }catch(error){

        console.log('error',error);
        

    }

}
