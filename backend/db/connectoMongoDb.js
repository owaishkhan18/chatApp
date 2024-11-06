
import mongoose from "mongoose";
 const connectMongodb=async ()=>{
    try{
    // console.log(prov)
    console.log(process.env.MONGODB_URL_SRC)
     await mongoose.connect(process.env.MONGODB_URL_SRC, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
    //  mongoose.connect();
         
     console.log("db is connected ")
    }
    catch(error){
     console.log("something happend on the that code",error)
    }
}

export default connectMongodb