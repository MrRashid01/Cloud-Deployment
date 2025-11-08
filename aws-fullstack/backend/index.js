const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Node backend - AWS Load Balancer Demo!");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend", time: new Date() });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
