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
  const newConspiracy = [req.body.description, req.body.proof, req.body.mainstream_science, req.body.year]

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
app.put('/conspiracy/:id', (req, res) => {
  const conspiracyId = req.params.id
  const columnToUpdate = [req.body.description, req.body.proof, req.body.mainstream_science, req.body.year]

  const updateConspiracy = `UPDATE conspiracy SET description = ?, proof = ?, mainstream_science = ?, year = ? WHERE conspiracy.oid = ${conspiracyId}`
  db.all(updateConspiracy, columnToUpdate, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Conspiracy ${conspiracyId} successfully updated!`)
    }
  })
})

//delete one conspiracy YES
app.delete('/conspiracy/:id', (req, res) => {
  const conspiracyId = req.params.id
  const deleteConspiracy = `DELETE FROM conspiracy WHERE conspiracy.oid = ${conspiracyId}`

  db.all(deleteConspiracy, (error, result) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Conspiracy with ID ${conspiracyId} successfully deleted`)
    }
  })
})

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
  const newLocation = req.body.name

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
app.put('/location/:id', (req, res) => {
  const locationId = req.params.id
  const columnToUpdate = req.body.name

  const updateLocation = `UPDATE location SET name = ? WHERE location.oid = ${locationId}`
  db.all(updateLocation, columnToUpdate, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Location ${locationId} successfully updated!`)
    }
  })
})

//delete one location
app.delete('/location/:id', (req, res) => {
  const locationId = req.params.id
  const deleteLocation = `DELETE FROM location WHERE location.oid = ${locationId}`

  db.all(deleteLocation, (error, result) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Conspiracy with ID ${locationId} successfully deleted`)
    }
  })
})

/////////////////
//EPISODE ROUTES//
////////////////

//get all episodes YES
app.get('/episodes', (req, res) => {
  const getEpisodes = `SELECT * FROM episodes`

  db.all(getEpisodes, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//get one episode YES
app.get('/episodes/:id', (req, res) => {
  const episodeId = req.params.id
  const getOneEpisode = `SELECT title FROM episodes WHERE episodes.oid = ${episodeId}`

  db.all(getOneEpisode, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//post new episode YES
app.post('/episodes', (req, res) => {
  const postEpisode = `INSERT INTO episodes VALUES (?, ?, ?, ?)`
  const newEpisode = [req.body.season, req.body.episode, req.body.title, req.body.release_date]

  db.all(postEpisode, newEpisode, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(newEpisode)
    }
  })
})

//update one episode
app.put('/episodes/:id', (req, res) => {
  const episodeId = req.params.id
  const columnToUpdate = [req.body.season, req.body.episode, req.body.title, req.body.release_date]

  const updateEpisode = `UPDATE episodes SET season = ?, episode = ?, title = ?, release_date =? WHERE episodes.oid = ${episodeId}`
  db.all(updateEpisode, columnToUpdate, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Episode ${episodeId} successfully updated!`)
    }
  })
})

//delete one episode
app.delete('/episodes/:id', (req, res) => {
  const episodeId = req.params.id
  const deleteEpisode = `DELETE FROM episodes WHERE episodes.oid = ${episodeId}`

  db.all(deleteEpisode, (error, result) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Episode with ID ${episodeId} successfully deleted`)
    }
  })
})

/////////////////////////////////////////////
//EVENTUALLY CONSPIRACY EPISODE JOIN TABLE//
////////////////////////////////////////////

//server
app.listen(port, () => {
  console.log(`aliens watching on port ${port}`)
})
