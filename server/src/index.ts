import express from "express";
import path from "path";
import { Config } from "./config";
import fs from "fs";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.raw());


app.use('/', express.static(path.join(__dirname, "web")));
app.use('/*', express.static(path.join(__dirname, "web")));

app.listen(port, () => {
  console.log(`start http://localhost:${port}`)
})