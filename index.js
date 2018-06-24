const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let morgan = require('morgan')
app.use(morgan('tiny'))
const Notif = require('./models/notification')




app.use(bodyParser.json())

app.get('/api/helloworld', (req, res) => {
    
  
    Notif
    .find({})
    .then(notifications => {
        console.log('all notifications from mongo-db',notifications)
      
        res.json(Notif.format(notifications[0])["name"])
    }).catch(error => {
        console.log(error)
        // ...
    }) 
  })
  
  
  
  
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  