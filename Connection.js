const {MongoClient}=require("mongodb")
const url="mongodb://127.0.0.1/27017"
const client=new MongoClient(url)
async function Connection()
{
  const result= await client.connect()
  const database= result.db("modules")
  return database.collection("videos")
}
module.exports=Connection