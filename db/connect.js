const mongoose = require("mongoose");
connectionString =
  "mongodb+srv://prateek:Quested741@cluster0.isgenaj.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";
main()
  .then((req, res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(connectionString);
}
