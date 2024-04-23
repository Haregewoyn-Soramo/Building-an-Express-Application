const express = require('express');

const app = express();

const todoController = require('./controllers/todoController')

const port = 3000;
app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);



app.listen(port, function(){
  console.log('you are listening to port: ', port)
})