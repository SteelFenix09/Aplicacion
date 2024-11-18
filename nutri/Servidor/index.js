const express = require("express");
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require('path')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, "..", 'src')))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.get("/mens", (req, res) => {
    res.send("Servidro funcionando")
})