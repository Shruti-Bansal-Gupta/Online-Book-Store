const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});