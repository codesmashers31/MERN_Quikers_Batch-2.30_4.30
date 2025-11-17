import plantModel from '../models/plantModel.js'

export const createdatas = async(req,res)=>{
    //  console.log(req.body);

    try {
     const {planetname,planetid} = req.body
     
    const datas = await plantModel.create({planetname,planetid})
    res.status(201).json({msg:"Added Successfully to the collecetion"})

      } catch (error) {
        console.log('error',error);
        
         res.status(401).json({msg:"Error"})
    }
}


export const getPlanetDatas = async(req,res)=>{

try {
    

     const getdatas = await plantModel.find()
     res.status(200).json({getdatas})

} catch (error) {
    console.log('error',error);
    
}


}



export const editPlanetDatas = async(req,res)=>{

 try {

     const {id} = req.params


    const editdataas = await plantModel.findById(id)

    res.status(200).json({editdataas})
    
 } catch (error) {

    console.log('error',error);
    
    
 }

}


export const updateplanet = async (req,res)=>{


    //console.log(req);

    const updatedataplanet = await plantModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({msg:"Succfully Updated"})

}


export const  deletedatas = async(req,res)=>{

    const deletedataplanet = await plantModel.findByIdAndDelete(req.params.id,{new:true})

    res.status(200).json({msg:"Successfully deleted"})


}