const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/',(req,res)=>res.json({
    message: 'hello world'
}))

app.get('/employee', db.getEmployee)
app.get('/employee/:id', db.getEmployeeById)
app.post('/employee', db.createEmployee)

app.listen(port,()=>console.log(`server conected on port ${port}`))

