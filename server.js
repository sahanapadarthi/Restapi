console.log('Hello Sahana. How are you?')
const express = require('express')
const app = express()
app.get('/', (req,res) => {
    res.send('hello node api')
})
app.listen(5501, ()=> {
    console.log('api running with port 5501')
})


