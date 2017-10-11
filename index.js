const express = require('express')
        , bodyParser = require('body-parser')
        , cors = require('cors')
        , massive = require('massive')


let app = express()
app.use(bodyParser.json());
app.use(cors());

