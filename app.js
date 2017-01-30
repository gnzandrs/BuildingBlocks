var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var urlencoded = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

var redis = require('redis')
// Redis connection
if (process.env.REDISTOGO_URL) {
  var rtg = require('url').parse(process.env.REDISTOGO_URL)
  var redis = redis.createClient(rtg.port, rtg.hostname)
  client.auth(rtg.auth.split(":")[1])
} else {
  var client = redis.createClient()
  client.select((process.env.NODE_ENV || 'development').length)
}
// End redis connection



app.get('/cities', function (request, response) {
  client.hkeys('cities', function (error, name) {
    response.json(name)
  })
})

app.post('/cities', urlencoded, function (request, response) {
  var newCity = request.body
  if (!newCity.name || !newCity.description) {
    response.sendStatus(400)
    return false
  }
  client.hset('cities', newCity.name, newCity.description, function (error) {
    if (error) throw error
    response.status(201).json(newCity.name)
  })
})

app.delete('/cities/:name', function (request, response) {
  client.hdel('cities', request.params.name, function (error) {
    if (error) throw error
    response.sendStatus(204)
  })
})

module.exports = app
