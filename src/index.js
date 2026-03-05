import mongoose from "mongoose";

(async()=>{
        try{
            await mongoose.connnect(`${process.env.MONGODB_URI}/{DB_NAME}`)
            app.on("error", (error)=>{
                console.log("Error: ", error);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`app is listening on ${process.env.PORT}`);
            })
        }catch(error){
            console.log("Error: ",error)
            throw error;
        }
    })()