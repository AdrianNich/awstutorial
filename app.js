const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Youre at the homepage')
})
app.listen(3000, () => {
  console.log('Welcome homie')
})
