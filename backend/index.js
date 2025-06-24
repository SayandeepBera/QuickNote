const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

// converts incoming JSON data from the HTTP request into a JavaScript object and attaches it to req.body
app.use(express.json()); 

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend iNotebook listening on port ${port}`)
})
