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

#### After DB is Connected then Start the Server via app

#### src/app.js
- [x] Express are used to make a app 
```javaScript
    import express from "express";

    const app = express();
    export { app };
```
- [x] express are Running on the listening that server Starts or not in src/index.js.

#### src/index.js
```javaScript
    // Server is listening by the help of the express app.
    const port = process.env.PORT || 8000
    .then(()=>{
        .listen(port ,()=>{
            console.log(`Server is running on Port: ${port}`);
        
        })
    })
.catch((error)=>{
    console.log(`MONGODB CONNECTION FAILED!!!`,error);
    
})
```

#### src/util/AsyncHandler.js 
```javaScript
const asyncHandler = (requestHandler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((error)=> next(error))
    }
}

export { asyncHandler };
```
#### src/util/ApiError.js 
```javaScript
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors= [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack 
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export { ApiError };

```
### src/utils/ApiResponse.js
```javaScript
class ApiResponse {
    constructor(statusCode,data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}
```