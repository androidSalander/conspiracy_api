let fs = require('fs')
let sqlite = reqire('sqlite3')
let db = new sqlite.Database('./database.db')
let sql = fs.readFileSync('./seed.sql')
database.run(sql.toString(), error => {
  if(error) console.error("SQL seed failed", error)
  else console.log("Success!")
})

//## TABLE SETUP ##
// Conspiracy
// -- description TEXT
// -- "proof" TEXT
// -- mainstream_science TEXT
// -- year INTEGER
// -- people_id INTEGER
// -- location_id INTEGER

/*let testConspiracies = [
  {
    description: "Akhenaten was an alien-human hybrid",
    proof: "His elongated skull and weird monotheism",
    mainstream_science: "Egyptian royal families imbred, he could have had a number of genetic disorders that caused his odd physical appearance",
    year: "1350 BC"
  },
  {
    description: "The Great Pyramid was used as a nuclear power plant for alien spacecraft",
    proof: "The central chamber could have been filled with gas and used to create a power source",
    mainstream_science: "Ancient Egyptians created complex structures to protect the Pharaos in the afterlife",
    year: "2560 BC"
  },
  {
    description: "The ancient Myans had advanced technology and knowledge for their age because of contact with aliens",
    proof: "The Myan Calendar",
    mainstream_science: "The Myans were really smart actually",
    year:
  },
  {
    description:
    proof:
    mainstream_science:
    year:
  },
  {
    description:
    proof:
    mainstream_science:
    year:
  }
]*/
