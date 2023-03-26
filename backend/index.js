// importing DB connection file

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  getBucketList,
  addNewBucket,
  addNewCard,
  updateBucketName,
  getCardList,
  deleteCard,
  updateCard,
  saveHistory,
  getHistoryList,
} from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = process.env.PORT || 9002;

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

app.get("/", (req, res) => {
  res.send("hello from heroku");
});

app.get("/getBucketList", getBucketList);
app.post("/addNewBucket", addNewBucket);
app.post("/updateBucketName", updateBucketName);

app.post("/addNewCard", addNewCard);
app.post("/getCardList", getCardList);
app.post("/deleteCard", deleteCard);
app.post("/updateCard", updateCard);

app.post("/saveHistory", saveHistory);
app.get("/getHistoryList", getHistoryList);

app.listen(PORT, () => {
  console.log("We are running on port 9002");
});
