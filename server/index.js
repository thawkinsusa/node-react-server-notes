const express = require("express")
require('dotevn').config({path: __dirname + '/../.env'})
const app = express()
// routes for the function from controllers
const dc = require('./controllers/mainCtrl')
//grabbing dog
app.get('/api/dogs', dc.favoriteDogs)
// always expect an id in app.put
app.put('/api/dogs:id', dc.updateRating)
//
app.post('/api/dogs', dc.addDog)
//
app.delete('/api/dog/:id', dc.deleteDog)
const{
    SERVER_PORT
} = process.env;

app.listen(SERVER_PORT, ()=> {
    console.log(`listening on ${SERVER_PORT} `);
})