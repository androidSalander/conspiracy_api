let sqlite = require('sqlite3')
let db = require('./database.db')

//## TABLE SETUP ##
// Conspiracy
// -- description TEXT
// -- "proof" TEXT
// -- mainstream_science TEXT
// -- year TEXT
// -- people_id INTEGER
// -- location_id INTEGER

const conspiracyTableQuery =
`CREATE TABLE IF NOT EXISTS conspiracy (
  description TEXT,
  "proof" TEXT,
  mainstream_science TEXT,
  year TEXT,
  people_id INTEGER,
  location_id INTEGER)`

db.run(conspiracyTableQuery, error => {
  if(error) console.log("create conspiracy table FAILED", error)
  else console.log("conspiracy table created!")
})

module.exports = db
