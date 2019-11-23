let sqlite = require('sqlite3')
let db = new sqlite.Database('./database.db')

//## TABLE SETUP ##
// Conspiracy
// -- description TEXT
// -- "proof" TEXT
// -- mainstream_science TEXT
// -- year TEXT
// -- people_id INTEGER

const conspiracyTableQuery =
`CREATE TABLE IF NOT EXISTS conspiracy (
  description TEXT,
  proof TEXT,
  mainstream_science TEXT,
  year TEXT)`

// Location
// -- name TEXT

const locationTableQuery =
`CREATE TABLE IF NOT EXISTS location (
  name TEXT)`

//database creation
db.run(conspiracyTableQuery, error => {
  if(error) console.log("conspiracy table DESTROYED by aliens", error)
  else console.log("conspiracy table created...by aliens!")
})

db.run(locationTableQuery, error => {
  if(error) console.log("location table DESTROYED by aliens", error)
  else console.log("location table created...by aliens!")
})

module.exports = db
