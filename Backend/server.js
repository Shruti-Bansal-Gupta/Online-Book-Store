const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/books", (req, res) => {
    res.json(courses);
  });

app.get('/',(req,res)=>{
  res.send('hello world')
})

//mongodb configuration 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:lQEOBTvrYiudMJuC@cluster0.vlsqgd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a connection of documents
    const booksCollection = client.db("booksInventory").collection("books");

    //insert a book to the database: post method
    app.post("/upload-book",async(req,res)=>{
       const data = req.body;
       const result = await booksCollection.insertOne(data);
       res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});