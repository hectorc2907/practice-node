import express from "express";
import logger from "morgan";
import { PORT } from "./config.js";
import { UserRepository } from "./user-repository.js";

const app = express();
app.use(express.json());

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {});
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const id = UserRepository.create({ username, password });
    res.send({ id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.post("/logout", (req, res) => {});

app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
