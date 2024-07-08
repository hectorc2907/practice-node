import express from "express";
import logger from "morgan";
import { PORT } from "./config.js";

const app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {});
app.post("/register", (req, res) => {});
app.post("/logout", (req, res) => {});

app.get("/protected", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
