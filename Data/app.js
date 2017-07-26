const express = require('express')
const Robots = require('./data.js')
const app = express();
const mustacheExpress = require('mustache-express');
// install the express and mustacheExpress


app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/page_demo', function (request, response) {
  response.sendFile(__dirname + '/real_webpage.html')
});

app.get('/dynamic_demo_1', function (request, response){
  response.render('Me', {word: 'Cool' });
});

app.get('/staff', function (request, response) {
  response.render('staff', { people: people });
});


app.get('/staff_member/:name', function(request, response) {
let person = staffMembers.find(function(member) {
    return member.name.toLowerCase() === request.params.name;
});
  response.render('staff_member', person);
});

app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
});
