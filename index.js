//requires
let express = require('express')
let db = require('./database.js')
let app = express()

app.use(express.json())

const port = 7777

/////////////////////
//CONSPIRACY ROUTES//
////////////////////
app.get('/conspiracy', (req, res) => {
  const getConspiracies = 'SELECT * FROM conspiracy'

  db.all(getConspiracies, (error, results) => {
    if(error) {
      console.log("FAILURE", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS!")
      res.status(200).json(results)
    }
  })
})

app.post('/conspiracy', (req, res) => {
  const postConspiracy = `INSERT INTO conspiracy VALUES (?, ?, ?, ?)`
  let newConspiracy = [req.body.description, req.body.proof, req.body.mainstream_science, req.body.year]

  db.all(postConspiracy, newConspiracy, (error, results) => {
    if(error) {
      console.log("FAILURE", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS!")
      res.status(200).json(newConspiracy)
    }
  })
})

///////////////////
//LOCATION ROUTES//
///////////////////

app.get('/location', (req, res) => {
  const getLocations = `SELECT * FROM location`

  db.all(getLocations, (error, results) => {
    if(error) {
      console.log("FAILURE", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS!")
      res.status(200).json(results)
    }
  })
})

app.post('/location', (req, res) => {
  const postLocation = `INSERT INTO location VALUES (?)`
  let newLocation = [req.body.name]

  db.all(postLocation, newLocation, (error, results) => {
    if(error) {
      console.log("FAILURE", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS!")
      res.status(200).json(newLocation)
    }
  })
})

/////////////////
//PEOPLE ROUTES//
////////////////

/////////////////////////////////////////////
//EVENTUALLY CONSPIRACY LOCATION JOIN TABLE//
////////////////////////////////////////////

//server
app.listen(port, () => {
  console.log(`aliens watching on port ${port}`)
})
