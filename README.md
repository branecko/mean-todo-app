# MEAN Todos app

This is sample app that use MEAN stack.

**You need to setup mLab db and fill dbusername and pwd in `./routes/todos.js:6` !!**

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
- create client folder a initialize front end part of app - see [commit](https://github.com/branecko/mean-todo-app/commit/e72cd74b97daf5ca7a785123c5e3bbaafbe158b7)