# Connection Of DataBase In Index.js
``` JavaScript
    // we are Using Iffee for now
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
const app = express();
import { DB_NAME } from "./constants.js";

dotenv.config();

(async()=>{
        try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            console.log("Database Connected SuccessFully")
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
# Connection Of DataBase In Very Professional Ways.
- [x] New Approach is next for connecting the database.
#### src/db/index.js
``` javaScript
import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";

const ConnectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB Connected !! DB Host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MongoDb Connection Error " ,error);
        process.exit(1);
    }
}
export default ConnectDB;
```
#### src/index.js
``` javaScript

// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";

import ConnectDB from "./db/index.js";

dotenv.config({
        path: './.env'
    })
ConnectDB();
```

- [x] This is the professional code for the connecting the database.