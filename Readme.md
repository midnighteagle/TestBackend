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

- [x] 
