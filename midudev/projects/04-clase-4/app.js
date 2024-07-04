import express, { json } from "express";

const app = express();
app.use(json());
app.disabled("x-powered-by");

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})