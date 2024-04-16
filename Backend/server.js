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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});