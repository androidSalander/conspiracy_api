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
  const getOneConspiracy = `SELECT keyword, description, proof, mainstream_science, year FROM conspiracy WHERE conspiracy.oid = ${conspiracyId}`

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
  const postConspiracy = `INSERT INTO conspiracy VALUES (?, ?, ?, ?, ?, ?)`
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
app.get('/locations', (req, res) => {
  const getLocations = `SELECT * FROM locations`

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
app.get('/locations/:id', (req, res) => {
  const locationsId = req.params.id
  const getOneLocation = `SELECT location FROM locations WHERE locations.oid = ${locationsId}`

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
app.post('/locations', (req, res) => {
  const postLocation = `INSERT INTO locations VALUES (?)`
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
app.put('/locations/:id', (req, res) => {
  const locationsId = req.params.id
  const columnToUpdate = req.body.name

  const updateLocation = `UPDATE locations SET location = ? WHERE locations.oid = ${locationsId}`
  db.all(updateLocation, columnToUpdate, (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Location ${locationsId} successfully updated!`)
    }
  })
})

//delete one location
app.delete('/locations/:id', (req, res) => {
  const locationsId = req.params.id
  const deleteLocation = `DELETE FROM locations WHERE locations.oid = ${locationsId}`

  db.all(deleteLocation, (error, result) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(`Conspiracy with ID ${locationsId} successfully deleted`)
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

///////////////////////////////////////
//GET ONE TO MANY CONSPIRACY LOCATION//
//////////////////////////////////////
app.get('/conspiracy/:id/locations', (req, res) => {
  const conspiracyId = req.params.id
  const getConspiracyLocation = `SELECT keyword, description, location FROM conspiracy JOIN locations ON location_id = locations.oid WHERE conspiracy.oid = ?`

  db.all(getConspiracyLocation, [conspiracyId], (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

/////////////////////////////////////////////
//EVENTUALLY CONSPIRACY EPISODE JOIN TABLE//
////////////////////////////////////////////

//get a conspiracy's episode and details using conspiracy_id
app.get('/conspiracy/:id/episodes', (req, res) => {
  const conspiracyId = req.params.id
  const getConspiracyEpisode = `SELECT keyword, description, season, episode, title FROM conspiracy JOIN conspiracy_episodes ON conspiracy_id = conspiracy.oid JOIN episodes ON episode_id = episodes.oid WHERE conspiracy_id = ?`

  db.all(getConspiracyEpisode, [conspiracyId], (error, results) => {
    if(error) {
      console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
      res.sendStatus(500)
    } else {
      console.log("SUCCESS - PROOF OF ALIEN LIFE!")
      res.status(200).json(results)
    }
  })
})

//associate a conspiracy with an episode
app.post('/conspiracy/:id/episodes', (req, res) => {
  const conspiracyId = req.params.id
  const episodeId = req.body.episode_id
  const associateConspiracyEpisode = `INSERT INTO conspiracy_episodes VALUES (?, ?)`

db.all(associateConspiracyEpisode, [conspiracyId, episodeId], (error, results) => {
  if(error) {
    console.log("FAILURE - HUMANS ARE ALONE IN THE GALAXY", error)
    res.sendStatus(500)
  } else {
    console.log("SUCCESS - PROOF OF ALIEN LIFE!")
    res.status(200).json(`Conspiracy at ID ${conspiracyId} and episode at ID ${episodeId} successfully joined!`)
  }
})

})

//server
app.listen(port, () => {
  console.log(`aliens watching on port ${port}`)
})
