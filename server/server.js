const express = require('express')
const pathfs = require('path')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(require('cors')())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(pathfs.resolve(__dirname, 'public')))
app.get('*', function (req, res) {
  res.sendFile(pathfs.resolve(__dirname, 'public','index.html'));
});

app.listen(port, () => {
  console.log(`Art challenges listening at http://localhost:${port}`)
})