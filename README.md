![API version](https://img.shields.io/badge/version-1.0-brightgreen.svg)
# GuruComm Test API
Welcome to GuruComm Test API v1

You can use my hosted api at 

## Getting Started

Assuming you already have installed Node and mongodb follow the next steps if not you can find information about how to install them base on your OS 

[Mongo DB](https://docs.mongodb.com/manual/installation/)

[Node JS](https://nodejs.org/en/download/current/)

1.	Installation process

Run `npm install` to get API dependencies.

2. Set up your environment variables, You will have to create a `.env` file at root directory with the variables needed
    
    * DB_HOST=host
    * DB_PORT=3306
    * DB_NAME=name
    * DB_USER=user
    * DB_PW=password
    * PORT=3005
    * DB_DIALECT=mysql

3. To Run your API you should execute 
    ```
    npm start
    ```

4.	API Developer documentation
    Go to `/api-docs/` to access code documentation for this API.

5. To made changes live while you are developing you should use 

```
npm run build
```

and then 

```
npm run start:dev
```

6. PostMan

[Link for the request](https://www.getpostman.com/collections/6536635241b859b3a232)

You are all set up!!
good luck