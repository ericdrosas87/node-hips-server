const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.static("CDS_P_AKARI_FIS_Color")); // OR name of folder containing HiPS data/images


app.get('/', function (req, res) {
  res.send("Custom HiPS Server - Point Aladin client at http://localhost:5000")
})

app.listen(PORT, () => {
  console.log(`started server on port ${PORT}`);
})