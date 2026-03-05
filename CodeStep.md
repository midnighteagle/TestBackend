# Connection Of DataBase In Index.js
``` JavaScript
    // we are Using Iffee for now
    import mongoose from "mongoose";
    import {DB_NAME} from "./src/constants.js"

    import express from "express"
    const app = express();

    (async()=>{
        try{
            await mongoose.connnect(`${process.env.MONGODB_URI}`)
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
```
- [x] This is the First Approach but i pollute the index.js  so we try the new Approach.
- [x] New Approach is next for connecting the database.
