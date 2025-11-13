import Chennai_Route_Model from "../models/routeModel.js";

export const createDatas = async(req,res)=>{


    // console.log(req.body);


    try {

        const {startroute,endroute} = req.body

        const datasinsert = await Chennai_Route_Model.create({startroute,endroute})

        res.status(201).json({msg:"Successfully Done",datasinsert})

        
    } catch (error) {

        console.log('error',error);
        
        
    }
    



    

}



export const getRoutesData = async(req,res)=>{


    const datasget = await Chennai_Route_Model.find();

    //console.log(datasget)
    res.status(200).json({datasget})
    

}


export const editData = async(req,res)=>{

    // console.log(req.params);
    
  const {id} = req.params

    const editget = await Chennai_Route_Model.findById(id)

    //console.log(editget);

    res.status(200).json({editget})
    


}