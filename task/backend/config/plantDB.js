import mongoose from "mongoose";

const planetDB = async()=>{

try {

    const plantconnect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB Connected${plantconnect.connection.host}`);
    
    
} catch (error) {

    console.log(`Error ${error}`);
    
}


}

export default planetDB
