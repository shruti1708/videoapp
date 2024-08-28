var connection = require("./Connection")
var express = require("express")
var cors = require("cors")
const Connection_user = require("./Connection_user")
const { ObjectId } = require("mongodb")
var app = express()
app.use(express.json({ limit: '1gb' }))
app.use(cors())


app.post("/Insert", async function (req, resp) {
  const connection1 = await connection()
  console.log(req.body)
  connection1.insertOne(req.body)
  resp.end()
})

app.get("/", async function (req, resp) {
  resp.send("running")
  resp.end()
})


app.get("/get_video", async function (req, resp) {
  const connection1 = await connection()
  const result = await connection1.find({}).toArray()
  resp.send(result)
  resp.end()
})

app.post("/account_create", async function (req, resp) {
  const Connection_user_1 = await Connection_user()
  Connection_user_1.insertOne(req.body)
  resp.end()
})

app.post("/get_user", async function (req, resp) {
  const Connection_user_1 = await Connection_user()
  const result =await Connection_user_1.find(req.body).toArray()
  resp.send(result)
  resp.end()
})

app.post("/get_user_data", async function (req, resp) {
  const Connection_user_1 = await Connection_user()
  const result =await Connection_user_1.find({_id:new ObjectId(req.body.id)}).toArray()
  resp.send(result)
  resp.end()
})

app.put("/update_user_data", async function (req, resp) {
  const Connection_user_1 = await Connection_user()
  const index = req.body.index_vid.toString()
  const ind = {Video_Viewed:index}
  const result =await Connection_user_1.updateOne({_id:new ObjectId(req.body.id)},{$set:ind})
  resp.send(result)
  resp.end()
})

app.listen(3010)