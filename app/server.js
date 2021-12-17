const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express()
const connection = require('./helpers/connection')
const path = require("path");
const service = require('./service/personality')
app.use(cors())
const connectDB=()=> {
    connection.sync({
      force: false,
    });
  }
  
const port = process.env.port || 8000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log('listen on port 8000'))
app.get('/questions', (req, re) => {
    service.getQuestions().then(table => {
        re.json(table)
    })
})
app.get('/user/answers/:user', (req, re) => {
    service.getresult(req.params.user).then(table => {
        re.json(table)
    })
})
app.post('/answers', (req, re) => {
    const body = req.body
    const {user} = req.params
    service.postResult(body,user).then(table => {
        re.send('result posted')
    })
})
app.use(express.static('frontend'));
    app.get('/app',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'frontend/build','index.html'))
    })
connectDB()