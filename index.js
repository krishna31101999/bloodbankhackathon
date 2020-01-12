const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('frontend'))
app.get('/',(req,res)=>res.sendFile(__dirname+'/frontend/html/home.html'))
app.listen(port, () => console.log(`listening ${port}!`))