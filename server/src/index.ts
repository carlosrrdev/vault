import "reflect-metadata";
import "dotenv/config";
import express from "express";
// import cors from "cors";
import { AppDataSource } from "./db";

(async () => {
  const app = express();
  try {
    await AppDataSource.initialize();
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log("running");
  });
})();
