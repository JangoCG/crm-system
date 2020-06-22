let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(5000, () => console.log('Server started on Port 5000!'))
