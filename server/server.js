const express = require("express");
const cors = require("cors");
const app = express();

const data = require("./data.js");
app.use(cors());

console.log(data);

app.get("/api", (req, res) => {
  res.end(JSON.stringify(data));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
