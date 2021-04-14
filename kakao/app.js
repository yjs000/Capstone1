const express = require('express')
const morgan = require('morgan');
const path = require('path');

const port = 3000
const app = express()

app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'circle.html'));
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'circle.html'));
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})