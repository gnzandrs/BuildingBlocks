# About

This is the app built in the [Watch Us Build episode](https://www.codeschool.com/screencasts/build-an-express-js-app-with-tdd)

## You need

Node
Redis

## Running

Run redis
Run `npm install`
Run `npm start`

## Tests

In this code, are being used [supertest](https://www.npmjs.com/package/supertest) for make the http testing and [mocha](https://www.npmjs.com/package/mocha) for give it some style.

To run the tests you have to `npm test` when redis server is running.

## Heroku

This repository includes a Procfile to run this code on heroku, nevertheless you need a payed dyno to make it run. Because this code uses `redis to go` add-on.
