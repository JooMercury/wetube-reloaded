import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed </h1>");
  }
  next();
  console.log("Allowed, you may continue.");
};

const handleHome = (req, res, next) => {
  return res.send("<h1>I love middlewares.😍</h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here." });
};

app.get("/", logger, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
