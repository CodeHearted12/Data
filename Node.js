const express = require('express')
const app = express()

app.get('/morning', function (request, response) {
  response.send('Good Morning, it is now' + (new Date()))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
