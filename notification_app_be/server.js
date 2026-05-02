const express = require("express");
const Log = require("../logging_middleware/logger");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  Log("backend", "info", "controller", "Server started");
  res.send("Backend running");
});

app.use("/notify", require("./routes/notify"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});