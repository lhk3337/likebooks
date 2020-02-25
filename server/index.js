import express from "express";
const app = express();
const PORT = 5000;

const handleListening = () => {
  console.log(`Listening on http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("Hi from Home!");
};

const handleProfile = (req, res) => {
  res.send("User's Profile");
};

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening());
