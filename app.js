const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Youre at the homepage')
})
const port = process.env.port || 3000
app.listen(port, () => {
  console.log('Welcome homie')
})
