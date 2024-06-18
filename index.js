const express = require("express");

const app = express();
const PORT = 6060;

app.get("/", (req, res) => {
  res.send({ Hello: "There" });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
