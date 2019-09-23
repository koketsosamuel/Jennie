const express = require("express")
const ejs = require("ejs")
const bp = require("body-parser")
const bot = require("./routes/bot")
const {NlpManager} = require("node-nlp")
const cors = require("cors")

let manager

(async() => {

  manager = await new NlpManager({languages: ["en"]})
  await manager.load()
  manager.load("model2.nlp")

})()

const app = express()

// set up view and middleware
app.set("view engine", "ejs")
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())
app.use(cors())

// routes
app.post("/bot", async (req, res) => {

  let results = await manager.process(req.body.msg)
  res.json({ans: results.answer || "I could'nt quite get that. Can you please rephrase?"})

})

app.get("/", (req, res) => {

  res.render("chat")

})

// server listen
app.listen(process.event.PORT || 3000)
