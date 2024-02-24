const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const path = require("path");
const main = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await main(process.env.MONGO_URI);
    console.log("connected to db");

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
