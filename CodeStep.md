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

#### src/models
- user.model.js
```javaScript
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
            index:true,
        
        
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avatar:{
            type:String, // cloudinary Url use
            required:true,
            
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            
            }
        ],
        password:{ // Sequrity challenge for password. 
            type:String,
            required:[true, 'Password is required '],

        }
        

        
    },
    {
        timestamps:true,
    }
)
export const User = mongoose.model('User',userSchema);
```
- video.model.js
```javaScript
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String, // by the cloudinary url se.
            required : true,
        
        },
        thumbnail:{
            type: String, // by the cloudinary url se.
            required : true,
        
        },
        title:{
            type: String,
            required : true,
        
        },
        description:{
            type: String,
            required : true,
        
        },
        duration:{
            type: Number, // by the cloudinary url.
            required : true,
        
        },
        views:{
            type: Number,
            default: 0,
        
        },
        isPublished:{
            type: Boolean,
            default: false,
        
        },
        owner:{
            type: Schema.type.ObjectId,
            ref: 'User',
        
        }

        

    },
    {
        timestamps:true,
    }
)
videoSchema.plugin(mongooseAggregatePaginate) // for that read in Readme.md.
export const Video = mongoose.model('Video',videoSchema) 

```
- [x]isko hindi me likhte hai :-
- pehle ek Schema ka nam as variable define krenge.
- mongoose ke new keyword ko bolenge ki mongoose ka new keyWord ek Schema dena , aur usko parenthesis () dete hai 
- parenthesis ke andar do Curly braces dete hai with comma.
- ek curly braces ke andar schema ki properties ko define krte hai.
- dusre me curly braces ke andar timestamp define krte hai.
- uske baad export kr dete hai new variable bana ke 
- Aur mongoose ko bolte hai ki mongoose ek model bana ke dena jisme new export variable name aur Schema ka name refrence me dete hai.

- #### [x] Refrence from the other dbmodels like:
```JavaScript
    owner:{
            type: Schema.type.ObjectId, 
            ref: 'User',
        
        }
```
- isko Aishe bol sakte hai ki mongoose ek Schema ka type dena by ObjectId 
- ref lete hai by the existing models. 

- ##### [x] For user model we using the bycrypt not bcryptjs
- it is help to encrypt the password. for more detail [click here](https://www.npmjs.com/package/bcryptjs)
```bash
    npm i bcrypt
```
```bash
    npm i bcrypt.js
```
- ##### [x] One more packages that jwt (jsonwebtoken)
- it is help us to create the token and verify 
- payload is the data that should be encrypted by the JWT. for detailed [click here](https://www.npmjs.com/package/jsonwebtoken)
```bash
    npm i jsonwebtoken
```
- [X] REFRESH TOKEN GENERATE KRENGE;
```javaScript
import jwt from "jsonwebtoken";
// userSchema RefreshTokenGenerate hota hai using JWT
userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this.id,
            

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


```

- ### [x] This is the part of mongoose.
- [X] ACESS TOKEN GENERATE KRENGE;
```javaScript
import jwt from "jsonwebtoken";
// userSchema AccessTokenGenerate hota hai using JWT
userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
            

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

```