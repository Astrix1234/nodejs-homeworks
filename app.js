import express from "express";
import cors from "cors";
import router from "./routes/api/contacts.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", router);

app.use((_, res, __) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/contacts",
    data: "Not found",
  });
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

export default app;
