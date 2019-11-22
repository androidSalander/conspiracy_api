//requires
let express = require('express')
let db = require('./database.js')
let app = express()

app.use(express.json())

const port = 7777

//ROUTES//

/////////////////////
//CONSPIRACY ROUTES//
////////////////////

///////////////////
//LOCATION ROUTES//
///////////////////

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
