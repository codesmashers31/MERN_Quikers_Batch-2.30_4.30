import mongoose from "mongoose";


const connectDb = async()=>{
   
    try {

        const conn = await mongoose.connect(process.env.MONGI_URI)
        console.log(`Database conneceted ${conn.connection.host}`);
        
    } catch (error) {

        console.log('error',error);
        
        
    }


}


export default connectDb;