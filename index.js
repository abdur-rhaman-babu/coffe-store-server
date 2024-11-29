const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3500


app.use(cors())
app.use(express.json())

// coffeestore
// VhkJnNKZfojQrpHR


// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.6avkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://coffeestore:VhkJnNKZfojQrpHR@cluster0.6avkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
  
  
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
    res.send('cofee server is running')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})