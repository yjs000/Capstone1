const express = require('express')
const morgan = require('morgan');
const path = require('path');

const port = 3000
const app = express()

app.use(morgan('dev'));

app.get('/circle', (req, res) => {
  res.sendFile(path.join(__dirname, 'circle.html'));
})

app.get('/xy_to_address', (req, res) => {
  res.sendFile(path.join(__dirname, 'xy_to_address.html'));
})

app.get('/address_to_xy', (req, res) => {
  res.sendFile(path.join(__dirname, 'address_to_xy.html'));
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})