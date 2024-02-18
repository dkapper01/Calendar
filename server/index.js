const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors()); // Use CORS middleware to allow requests from any origin

app.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
