const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const main = require("./db/connect");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});
app.use("/api/v1/tasks", tasks);

const port = 3000;
const start = async () => {
  try {
    await main();
    console.log("connected to db");

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
