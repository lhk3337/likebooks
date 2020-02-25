const express = require("express");
const app = express();
const PORT = 3000;

handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening());

app.get("/", (req, res) => {
  res.send("hello world");
});
