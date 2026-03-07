# Now Repeat the backend Series By Own.

- [x] Create readme.md file First.
- [x] CodeStep.md file created.
- [x] Run the command npm init


# After Entered the command "npm init"
- [x] Ask For Package name: backend Revised.(camel case, spacing not allowed not allowed, -,_ allowed)

- [x] It's Asking for version. (keep it default).
- [x] It asking for Description (describe your project by own: like:- revising the backend for the starting the project by new one learning.)
- [x] It asking for entry points :- give as by default.
- [x] again it asking for the test Commands :- if you give the test commands then system  putted in by default.
- [x] It asking for git repo : you can set it otherwise do it later(for now i dont pu the git repo do it later.).
- [x] It asking for keywords:  revising,backend,myself,helpingMe, ChaiAurCode
- [x] Then it Asking for the author then put the name of the developer who is working on it.
- [x] Then it is asking for the licence : keep it default
- [x] asking for type : keep it module not commonjs.
- [x] Then hit the enter Slowly.
- [x] asking for the "is it okk? " yes :- type yes
- [x] it give the package.json file

## created the new file name is json file (package.json)
- To restart the server automatically we need to install nodemon 
- [x] nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

- [nodemon Ducumentation - ReadMe](https://www.npmjs.com/package/nodemon)

    ```bash
    npm i -D nodemon

    ```
- after this command run it create two more one folder isnode_modules and second is package-lock.json 
- now keep the script set as :
- package.json file.

    ```json
        "scripts": {
            "dev": "nodemon src/index.js"
        }

    ```


## Store Images in the file.(public/temp)
- create the file that name is .gitkeep because the git doesnot track the folder it track only files.


## create Source folder(src)
- createing file in the src folders :
    ```bash
         touch app.js constants.js index.js 
     ```
- creating the folders :
    ```bash
         mkdir controllers db middlewares models routes utils
     ```

## create gitignores.
- On the Web there is a gitignore generator is available for set the file .gitignore
- [GitIgnore-Generator](https://mrkandreev.name/snippets/gitignore-generator/#Node)  this is help to configure the gitignore file.



## enviroment variable(.env).

## enviroment varible sample(.envSmaple)

## prettier Documentation
- [NPM Prettier Documentaion - ReadMe](https://www.npmjs.com/package/prettier)
- [github Documentation - ReadMe]( https://github.com/prettier/prettier)

- Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
``` bash 
    npm i -D prettier
```
- Create prettierrc file 
``` prettier
        {
        "singleQuotes" :false,
        "bracketSpacing": true,
        "tabWidth": 2,
        "semi": true,
        "trailingComma": "es5"
        }
```

- Create Prettierignore file
``` prettier
        /.vscode
        /node_modules
        ./dist
        *.env
        .env
        .env.*
 ```
### --------------BASIC SETUP DONE-----------------

# Modular code and reuseable code that help that use many of times.

## DataBase Connection (mongoose Atlas).
- [x] Go to mongoose Atlas 
- [x] login With Your Representative accounts [Google, github]
- [x] Go to database and click on connect 
- [x] Select the compass for that you got a String like
- [x] mongodb+srv://Akshat:<db_password>@Akshat.8grpc7a.mongodb.net/ 

- [x] keep this string in the env like MONGO_URI = String;
### We Use Two Method by like use in index.js and other is In db Folder.
- [x] Initially we go with the index.js method . this method are implemented seprately in CodeStep.md
- [x] First we need to install dotenv from npm packages
``` bash 
    npm i dotenv
```
- [x] By the help of the require Syntax.
```javaScript
    require ('dotenv').config({path: './env'});
```
- [x] By the help of the import Syntax.
```javaScript
    import dotenv from "dotenv";

    dotenv.config({
        path: './.env'
    })
```
- [x] Implementation in the CodeStep.md.

- [x] then install the package moongoose 
``` bash 
    npm i mongoose
```


- [x] mongoose connection is in one line of code but it is not a professional Approach.lets See Oneline Approach
- [x] [NPM Mongoose Ducumentation - ReadMe](https://www.npmjs.com/package/mongoose)
- [x] [GitHub Mongoose Ducumentation ReadMe](https://github.com/Automattic/mongoose)

``` JavaScript
    import { createRequire } from 'https://deno.land/std@0.177.0/node/module.ts';
    const require = createRequire(import.meta.url);

    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!'));
```
- [x] To see the professional Approach go to CodeStep.md



### Now create a app using Express:-
[ExpressDocumentation -ReadMe](https://expressjs.com/en/5x/api.html) About request, response

#### Request.body
- [x] Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
```javaScript
    const express = require('express')

    const app = express()

    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for  parsing application/x-www-form-urlencoded

    app.post('/profile', (req, res, next) => {
        console.log(req.body)
        res.json(req.body)
    })

```

#### req.cookies
- [x] When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.
```javaScript
    // Cookie: name=tj
    console.dir(req.cookies.name)
    // => "tj"

```

- [x] then need to install package express
``` bash 
    npm i express
```
- [x] Express are used to make a app 
```javaScript
    import express from "express";

    const app = express();
```
- [x] We have to install cookie-parser
``` bash 
    npm i cookie-parser
```

- [x] We have to install cors
``` bash 
    npm i cors
```
Cors Stands for cross origin resource sharing , this means that (Scheme +Host + port) like https://facebook.com/profile and another one is https://flipkart.com/cart these are diffrent web orgin so cors restrict the sharein resource from the between these help overcome the security issue. 

### Configration of cors and Cookie-Parser in the App.js
```javaScript
import cors from "cors";
        app.use(cors({
        origin: process.env.CORS_ORIGIN,
        Credential: true
    }));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())
```

## Adding the asyncHandler in the utilities file(utils)
- [x] It is made due to the handle the async and await work like db connection take time to connect  
```javaScript
    // for better understanding that is higher order function.
    const asyncHandler = () => {}
    const asyncHandler = (func)=>{()=>{}}
    const asyncHandler = (func) =>() =>{}
    const asyncHandler = (func) =>async() =>{}
    const asyncHandler = (fn) => async() => {}
```
### AsyncHandler using tryCatch 
```javaScript
    const asyncHandler = (fun)=>async(req, res, next){
    try {
        await fun(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message:error.message
        })
    }
}
export {asyncHandler};
```
### Api Errors
[Documentation of ApiError - ReadMe](https://nodejs.org/api/errors.html)
- [x] It Shows the types of errors.
- [x] Its Implementation to Fix the Api error in codeStep.js

### ApiResponse
- [x] This is used to give the response from the Api to User 
- [x] Its Implementation is done in the CodeStep.md.

### Now work with the models
- [x] this is the syntax to generate the mongoose schema 
```javaScript
    import mongoose, { Schema } from "mongoose";

    const videoSchema = new Schema(
        {

        },
        {
            timestamps:true,
        }
    )
export const Video = mongoose.model('Video',userSchema)
```