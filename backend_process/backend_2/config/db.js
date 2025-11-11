import mongoose from "mongoose";



const connectDB = async()=>{

try{

    const data = await mongoose.connect(process.env.MONGO_URI)

    console.log(`Succfully DB conneceted ${data.connection.host}`);
    

}catch(error){
  
console.log('Somethings error',error);
console.error(error);
process.exit(1)

       
}


}

export default connectDB;