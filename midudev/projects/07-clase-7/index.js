import express from "express";
import logger from "morgan";
import { PORT } from "./config.js";

const app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
