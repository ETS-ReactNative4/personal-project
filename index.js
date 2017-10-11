const express = require('express')
        , bodyParser = require('body-parser')
        , cors = require('cors')
        , massive = require('massive')
require('dotenv').config()


let app = express()
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then( db => app.set('db', db) );




const PORT = 3013
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

