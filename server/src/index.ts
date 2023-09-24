import express from "express";
import path from "path";
import { Config } from "./config";
import fs from "fs";
import { WorkItemsRepository } from "./repositories/workitems-repository";
import compression from "compression"
// TOOD: @sharedで参照できない理由が不明(tscコンパイルは通るがpkgで警告が出る)
import { encodeAzureDevOpsWorkItem } from '../../libs/shared-models/workitemsproto'

const port = 3000;
const app = express();

app.use(compression());
app.use(express.json());
app.use(express.raw());

app.get('/workitems', (req, res) => {
  let workItemsRepository = new WorkItemsRepository();
  const workItems = workItemsRepository.get_all();
  const binData = encodeAzureDevOpsWorkItem(workItems);
  res.set('Content-Type', 'application/octet-stream');
  res.status(200).send(binData)
})

console.log(__dirname);
app.use('/', express.static(path.join(__dirname, "../../web")));
app.use('/*', express.static(path.join(__dirname, "../../web")));

app.listen(port, () => {
  console.log(`start http://localhost:${port}`)
})