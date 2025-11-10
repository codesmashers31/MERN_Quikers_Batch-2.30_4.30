export const userController = (req,res)=>{

//console.log(req.body);

const {name,submit} = req.body
try{

if(name){
    const datas = [name,submit]
    //console.log(datas);

    res.status(200).json({msg:"Ok done",store:datas})
    
}else{
    res.status(400).json({msg:"Sorry We can't give"})
}


}catch(error){
    console.log(error);
    
}

}


export const userEditController = (req,res)=>{

    //console.log(req.params);
    const {user_id} = req.params
    //console.log(user_id);
    
    if(user_id==234){
        res.status(200).json({msg:`Data Succfully updated based on you id ${user_id}`})
    }else{
        res.status(404).json({msg:`Not Allowted`})
    }
}



export const query_controller = (req,res)=>{

    //console.log(req);

    const {leodatas,dataproviders,done} = req.query;

    if(leodatas==234){
            res.status(200).json({dataproviders,done})
    }else{
        res.status(404).json({msg:"Not done i am not giving"})
    }
    

}


export const headers_controller = (req,res)=>{

    //console.log(req);

    const {leo} = req.headers;

    if(leo==234){
            res.status(200).json({leo})
    }else{
        res.status(404).json({msg:"Not done i am not giving"})
    }
    

}