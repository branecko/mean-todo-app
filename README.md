# MEAN Todos app

This is sample app that use MEAN stack.
ExpressJS, ExpressJS body parser, MLab, 

**You need to setup mLab db and fill dbusername and pwd in `./routes/todos.js:6` !!**

* start server with `node server`
* compile frontend with `npm run tsc:w`

# Structure:

> **client/** -frontend ng2 app using typescript, systemJs 

> **routes/** - routes defined 
> **routes/index.js** - defined what happens when `<baseURL>/` url was hit
> **routes/todos.js** - defined what happens when `<baseURL>/api/v1` url was hit and all other API calls such as `GET /todos`, `PUT /todo/:id`,...

> **views/index.html** - `index.html` is defined here. It starts frontend ng2 app (see `<my-app>Loading...</my-app>` and necessary imports) 

> **.bowerrc** - file needs to be modified to change bower_components downloaded location 

> **server.js** - basic 'server' file that defines expressjs, bodyparser, routes, inicialize frontend(static content) folder and starts server

# Notes during development:
- project based on [expressjs](https://expressjs.com), [nodejs](https://nodejs.org) and angular 2 on frontend
- express server setup - [commit](https://github.com/branecko/mean-todo-app/commit/5511da39dccb6e15eb7a5c2340d884c6dfe3f263)
- **mLab (mongo lab)**
  - create account on [mLab](https://mlab.com/)
  - on dashboard create new deployment and select AWS(cloud provider), single node, Sandbox and dbname: `meantodos` and confirm
  - open database > users and add db user. Remember user + pwd.
  - copy mongodb URI for example `mongodb://<dbuser>:<dbpassword>@ds145659.mlab.com:45659/meantodos` into `todos.js` - see [commit](https://github.com/branecko/mean-todo-app/commit/f80ede7bf8efee45f8b1c4defdb88ab37cac354c)
  - add collection `todos` and open it
  - click to Add document and pass this code there:
  ```
  {
     "text": "Finish Todo app",
     "isCompleted": false
  }
  ```
and click to `create and go back` and repeat last step with with 
 ```
 {
     "text": "Meeting with client",
     "isCompleted": false
 }
 ``` 
 
- API get todo collection and todo with :id parameter - see [commit](https://github.com/branecko/mean-todo-app/commit/1af0cd4573981a5bae8d247c19032c343c5384e1)
- API save/update/delete - see [commit](https://github.com/branecko/mean-todo-app/commit/c83ea53b9927bcedb5c43807415ea2cd1156a9b5)
- create client folder a initialize front end part of app - see [commit](https://github.com/branecko/mean-todo-app/commit/e72cd74b97daf5ca7a785123c5e3bbaafbe158b7) and [fix](https://github.com/branecko/mean-todo-app/commit/aa51d247a6696423191fd4e294ae9d21fa3b3808)
- install bower globally `npm i -g bower` and setup folder - see [commit](https://github.com/branecko/mean-todo-app/commit/caf0e6a708b8129548a6b8a3d4ecee95a6471339)
- install bootstrap `bower install bootstrap --save` and include it in head of index.html
```
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
``` 
and in body:
```
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
```
- During local development we can start typescript compiler in watchmode `npm run tsc:w`
- Prepare [template](https://github.com/branecko/mean-todo-app/commit/60d304099fc9840d32e9229b64ab713221f78bc2)
- (FE) Display todos using our local server api - see [commit](https://github.com/branecko/mean-todo-app/commit/991889d9cd50454044c61ae3dc9bf600ace67517)
- (FE) Save todo using our local server api - see [commit](https://github.com/branecko/mean-todo-app/commit/77b509e65f650ac5415fbb37e0fa1427b06e4db6)
- (FE) Update todo using our local server api - see [commit](https://github.com/branecko/mean-todo-app/commit/6f5adef6b6fde23bcdb61e1ac20c5cb2e3dec523)
- (FE) Delete todo using our local server api - see [commit](https://github.com/branecko/mean-todo-app/commit/052a06c045296155a3b81b1fb5b8c2e67573263b)