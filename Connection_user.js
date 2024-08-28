const {MongoClient}=require("mongodb")
const url="mongodb://127.0.0.1/27017"
const client=new MongoClient(url)
async function Connection_user()
{
  const result= await client.connect()
  const database= result.db("modules")
  return database.collection("users")
}
module.exports=Connection_user