const bodyParser = require('body-parser');

const data = [
  { item: 'get milk' },
  { item: 'walk dog' },
  { item: 'kick off some coding' }
];

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

  app.use(bodyParser.json())
app.get('/todo', function(req, res){
 res.render('todo',{todos: data});
});

app.post('/todo', urlencodedParser, function(req, res) {
  console.log(req.body); 
  data.push(req.body);
  console.log('data ', data)
  res.json(data);
});

app.delete('/todo/:item', function(req, res){
 data = data.filter(function(todo){
  return todo.item.replace(/ /g, '-') !== req.params.item
  res.json(data);
 });
});
};