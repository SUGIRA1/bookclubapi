import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import dotenv from "dotenv"

const app = express();

dotenv.config();

const port = process.env.PORT || 2021;

app.use(express.json());
app.use(bodyParser.json());

app.use(router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => { res.send("Hello from Homepage")})

app.listen(port, () => console.log(`Book club API is now available on port ${port}`))
