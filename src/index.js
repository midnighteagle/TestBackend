import dotenv from "dotenv";

import { app } from "./app.js";
import ConnectDB from "./db/index.js";

dotenv.config({
        path: './.env'
    })
ConnectDB()

// Server is listening by the help of the express app.
const port = process.env.PORT || 8000
.then(()=>{
    app.listen(port ,()=>{
        console.log(`Server is running on Port: ${port}`);
        
    })
    app.on("error",(error)=>{
        console.log("error",error);
        throw error
        
    })
})
.catch((error)=>{
    console.log(`MONGODB CONNECTION FAILED!!!`,error);
    
})