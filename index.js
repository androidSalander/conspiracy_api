//requires
let express = require('express')
let db = require('./database.js')
let app = express()

app.use(express.json())

const port = 7777

/////////////////////
//CONSPIRACY ROUTES//
////////////////////

//get all conspiracies YES
app.get('/conspiracy', (req, res) => {
  const getConspiracies = 'SELECT * FROM conspiracy'

  db.all(getConspiracies, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//get one conspiracy YES
app.get('/conspiracy/:id', (req, res) => {
  const conspiracyId = req.params.id
  const getOneConspiracy = `SELECT description FROM conspiracy WHERE conspiracy.oid = ${conspiracyId}`

  db.all(getOneConspiracy, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//post new conspiracy YES
app.post('/conspiracy', (req, res) => {
  const postConspiracy = `INSERT INTO conspiracy VALUES (?, ?, ?, ?)`
  let newConspiracy = [req.body.description, req.body.proof, req.body.mainstream_science, req.body.year]

  db.all(postConspiracy, newConspiracy, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(newConspiracy)
    }
  })
})

//update one conspiracy

//delete one conspiracy

///////////////////
//LOCATION ROUTES//
///////////////////

//get all locations YES
app.get('/location', (req, res) => {
  const getLocations = `SELECT * FROM location`

  db.all(getLocations, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//get one location YES
app.get('/location/:id', (req, res) => {
  const locationId = req.params.id
  const getOneLocation = `SELECT name FROM location WHERE location.oid = ${locationId}`

  db.all(getOneLocation, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//post new location YES
app.post('/location', (req, res) => {
  const postLocation = `INSERT INTO location VALUES (?)`
  let newLocation = [req.body.name]

  db.all(postLocation, newLocation, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(newLocation)
    }
  })
})

//update one location

//delete one location

/////////////////
//EPISODE ROUTES//
////////////////

//get all episodes

//get one episode

//post new episode

//update one episode

//delete one episode

/////////////////////////////////////////////
//EVENTUALLY CONSPIRACY EPISODE JOIN TABLE//
////////////////////////////////////////////

//server
app.listen(port, () => {
  console.log(`aliens watching on port ${port}`)
})
